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

const deleteSchema = z.object({
  id: z.string().min(1),
});

export async function DELETE(request: Request) {
  const unauthorized = requireAdminSession(request);
  if (unauthorized) {
    return unauthorized;
  }

  try {
    const body = await request.json();
    const parsed = deleteSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid inquiry id" }, { status: 400 });
    }

    await db.inquiry.delete({
      where: { id: parsed.data.id },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[INQUIRY_DELETE]", error);
    return NextResponse.json(
      { error: "Failed to delete inquiry." },
      { status: 500 }
    );
  }
}
