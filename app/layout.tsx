import type { Metadata, Viewport } from 'next';
import { SceneLoader } from '@/components/SceneLoader';
import { Navbar } from '@/components/Navbar';
import './globals.css';

const DESCRIPTION =
  'Full-stack developer in Toronto. Java, Node, React and SQL. I build web applications and find out why they break.';

export const metadata: Metadata = {
  metadataBase: new URL('https://ronil.cv'),
  title: 'Ronil Ghoghari — Full-stack developer, Toronto',
  description: DESCRIPTION,
  openGraph: {
    title: 'Ronil Ghoghari — Full-stack developer, Toronto',
    description: DESCRIPTION,
    type: 'website',
    locale: 'en_CA',
  },
  twitter: { card: 'summary_large_image', title: 'Ronil Ghoghari', description: DESCRIPTION },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#08131B',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#work">Skip to projects</a>
        <SceneLoader />
        <div className="scrim" aria-hidden="true" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
