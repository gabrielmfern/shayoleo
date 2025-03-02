import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: { default: "Shayoleo", template: "%s | shayoleo" },
  description:
    "Next.js web developer based in Tanzania, who can wprk remotely  ",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "web developer in Tanzania",
    "leonard joseph shayo",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <script src="https://cdn.emailjs.com/dist/email.min.js"></script> */}

        {/* <script defer src="/src/lib/script.js"></script> */}
      </head>
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
