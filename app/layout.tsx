import '@/styles/globals.css';
import {Bricolage_Grotesque, Source_Sans_3} from 'next/font/google';

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage-grotesque',
});
const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans-3',
});

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  // const headersList = headers();
  // const header_url = headersList.get('x-url') || '';
  // const url = new URL(header_url);

  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${sourceSans3.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
