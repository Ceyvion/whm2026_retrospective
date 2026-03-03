import type {Metadata} from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Angélique Kidjo: A Retrospective',
  description: 'Five Grammys. Four decades. A scrollable story about the voice that bent the arc of African music toward the world.',
  openGraph: {
    title: 'Angélique Kidjo: A Retrospective',
    description: 'Five Grammys. Four decades. The voice that bent the arc of African music toward the world.',
    type: 'website',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <div className="texture-overlay"></div>
        {children}
      </body>
    </html>
  );
}
