import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "drischdaan.dev",
  description: "Junior Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='relative bg-zinc-950 text-white font-sora'>
        <div className='z-10'>{children}</div>
        <div className='noise -z-10 absolute top-0 left-0 w-full h-full'></div>
      </body>
    </html>
  );
}
