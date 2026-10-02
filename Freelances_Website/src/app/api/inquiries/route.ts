import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

function requireAdminSession(request: Request) {
  const cookieHeader = request.headers.get("cookie") ?? "";
  const cookies = Object.fromEntries(
    cookieHeader
      .split(";")
      .map((cookie) => cookie.trim())
      .filter(Boolean)
      .map((cookie) => {
        const separatorIndex = cookie.indexOf("=");
        const key = separatorIndex === -1 ? cookie : cookie.slice(0, separatorIndex);
        const value = separatorIndex === -1 ? "" : cookie.slice(separatorIndex + 1);
        return [key, value];
      })
  );

  if (cookies.admin_session !== "authenticated") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return null;
}

const inquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(120),
  email: z.string().trim().email("A valid email address is required").max(200),
  service: z.string().trim().max(160).optional().default(""),
  message: z
    .string()
    .trim()
    .min(10, "Please describe your project (at least 10 characters)")
    .max(5000),
});

async function sendWhatsAppMessage(inquiry: {
  name: string;
  email: string;
  service: string;
  message: string;
}) {
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const destination = process.env.WHATSAPP_TO_NUMBER ?? "917028338510";

  if (!accessToken || !phoneNumberId) {
    console.log("[WHATSAPP] Missing WhatsApp Cloud API configuration");
    return { sent: false, reason: "configuration_missing" };
  }

  const cleanPhone = destination.replace(/\D/g, "");
  const messageBody = [
    "New inquiry from your website",
    "",
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    inquiry.service ? `Service: ${inquiry.service}` : "",
    "",
    "Project details:",
    inquiry.message,
  ]
    .filter(Boolean)
    .join("\n");

  const response = await fetch(
    `https://graph.facebook.com/v20.0/${phoneNumberId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: cleanPhone,
        type: "text",
        text: {
          body: messageBody,
        },
      }),
    }
  );

  if (!response.ok) {
    const body = await response.text();
    console.error("[WHATSAPP] Send failed:", response.status, body);
    return { sent: false, reason: "api_error", status: response.status };
  }

  return { sent: true };
}

export async function GET(request: Request) {
  const unauthorized = requireAdminSession(request);
  if (unauthorized) {
    return unauthorized;
  }

  try {
    const inquiries = await db.inquiry.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ inquiries }, { status: 200 });
  } catch (error) {
    console.error("[INQUIRIES_GET]", error);
    return NextResponse.json(
      { error: "Failed to fetch inquiries." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const parsed = inquirySchema.safeParse(body);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message ?? "Invalid input";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const { name, email, service, message } = parsed.data;

    const inquiry = await db.inquiry.create({
      data: { name, email, service, message },
    });

    let whatsappResult: { sent: boolean; reason?: string; status?: number } = {
      sent: false,
      reason: "not_attempted",
    };

    try {
      whatsappResult = await sendWhatsAppMessage({ name, email, service, message });
    } catch (error) {
      console.error("[INQUIRIES_POST_WHATSAPP]", error);
    }

    return NextResponse.json(
      {
        success: true,
        id: inquiry.id,
        whatsapp: whatsappResult,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[INQUIRIES_POST]", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
