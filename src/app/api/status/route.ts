import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import { statusInfo } from "@/content/status";

// GET /api/status
// Endpoint real, consumido pelo terminal no hero da página.
// Dados de identidade vêm de src/config/site.ts; o resto de src/content/status.ts.
export async function GET() {
  return NextResponse.json(
    {
      status: statusInfo.status,
      name: siteConfig.name,
      role: siteConfig.role,
      location: siteConfig.location,
      stack: statusInfo.stack,
      experience_time: statusInfo.experience_time,
      available_for: statusInfo.available_for,
      contact: siteConfig.email,
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
