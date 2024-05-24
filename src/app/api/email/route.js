import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    const res = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "leoshayo11@gmail.com",
      subject: "Message from contact form",
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    });

    console.log(res);

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    return NextResponse.json({ status: "error", message: error.message });
  }
}
