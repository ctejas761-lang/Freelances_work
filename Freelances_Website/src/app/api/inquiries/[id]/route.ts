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

const statusSchema = z.enum(["new", "contacted", "closed"]);

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const unauthorized = requireAdminSession(request);
  if (unauthorized) {
    return unauthorized;
  }

  try {
    const { id } = await context.params;
    const body = await request.json();
    const parsed = statusSchema.safeParse(body?.status);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Status must be one of: new, contacted, closed" },
        { status: 400 }
      );
    }

    const inquiry = await db.inquiry.update({
      where: { id },
      data: { status: parsed.data },
    });

    return NextResponse.json({ inquiry }, { status: 200 });
  } catch (error) {
    console.error("[INQUIRY_PATCH]", error);
    return NextResponse.json(
      { error: "Failed to update inquiry status." },
      { status: 500 }
    );
  }
}
