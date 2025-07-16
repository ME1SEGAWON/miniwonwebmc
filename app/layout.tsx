import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MINIWON - Ultimate Minecraft Server Experience',
  description: 'Join MINIWON, the ultimate Minecraft server with custom game modes, amazing community, and endless adventures. Experience PvP, survival, tournaments, and more!',
  keywords: 'Minecraft, server, PvP, survival, gaming, community, tournaments',
  authors: [{ name: 'MINIWON Team' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#10b981',
  openGraph: {
    title: 'MINIWON - Ultimate Minecraft Server Experience',
    description: 'Join thousands of players in the ultimate Minecraft server experience with custom game modes and amazing community.',
    type: 'website',
    url: 'https://miniwon.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MINIWON Minecraft Server',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MINIWON - Ultimate Minecraft Server Experience',
    description: 'Join thousands of players in the ultimate Minecraft server experience.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}