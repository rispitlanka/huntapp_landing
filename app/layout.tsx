import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Bricolage_Grotesque, Caveat, IBM_Plex_Mono } from 'next/font/google';
import { site } from '@/lib/site';
import './globals.css';

const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' });
const hand = Caveat({ subsets: ['latin'], weight: ['500', '600'], variable: '--font-hand', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: 'Hunt — Go out. Snap it. Get rewarded.',
  description: site.description,
  openGraph: {
    title: 'Hunt — Explore · Capture · Earn',
    description: 'Find good places. Snap your visit. Get rewarded.',
    images: ['/images/og.png'],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  themeColor: '#F5F1E8',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable} ${hand.variable}`} suppressHydrationWarning>
      <head>
        {/* Lets reveal animations start hidden only when JavaScript is running */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <noscript>
          <style>{'.skeleton{display:none}'}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
