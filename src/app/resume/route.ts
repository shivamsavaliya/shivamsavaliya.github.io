import { promises as fs } from "fs";
import path from "path";

export const dynamic = "force-static";

export async function GET() {
  const filePath = path.join(process.cwd(), "src", "assets", "Resume", "Shivam_Resume_2026.pdf");

  try {
    const fileBuffer = await fs.readFile(filePath);

    return new Response(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="Shivam_Resume_2026.pdf"',
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return new Response("Resume file not found.", { status: 404 });
  }
}
