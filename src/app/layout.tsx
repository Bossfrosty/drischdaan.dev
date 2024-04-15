import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'drischdaan.dev',
  description: 'Junior Web Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='relative w-full bg-black font-sora text-white'>
        <div className='z-10'>{children}</div>
        {/* <div className='noise absolute left-0 top-0 -z-10 h-full w-full'></div> */}
      </body>
    </html>
  );
}
