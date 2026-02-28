import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      phone,
      email,
      propertyType,
      monthlyBill,
      location,
      message,
    } = body;

    await transporter.sendMail({
      from: `"DR Green Energies" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_TO || process.env.GMAIL_USER,
      subject: `New solar inquiry from ${name}`,
      text: `
Name: ${name}
Phone: ${phone}
Email: ${email}
Property Type: ${propertyType}
Monthly Bill: ${monthlyBill}
Location: ${location}

Message:
${message || "-"}
      `.trim(),
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    console.error("Contact API error", error);
    return new Response(JSON.stringify({ ok: false }), { status: 500 });
  }
}

