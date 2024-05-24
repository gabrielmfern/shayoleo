import Email from "@/email";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    const res = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "leoshayo11@gmail.com",
      reply_to: email,
      subject: "Message from contact form",
      // html: <p> {`${name} , ${message}`}</p>,
      react: <Email name={name} message={message}></Email>,
    });

    console.log(`❤❤`);
    console.log(res);

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    return NextResponse.json({ status: "error", message: error.message });
  }
}
