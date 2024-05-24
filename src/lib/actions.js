"use server";

import emailjs from "@emailjs/browser";

export async function sendEmail(formData) {
  try {
    console.log(formData);
    const res = await emailjs.send(
      "service_d3v14ap",
      "template_lb6ols3",
      formData,
      "mUAx85XrZTBdf3zqo"
    );
    console.log(`❤❤❤❤`);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
