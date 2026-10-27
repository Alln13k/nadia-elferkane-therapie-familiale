import './globals.css';
import { SiteFooter, SiteHeader } from '../components/site/SiteChrome';

export const metadata = {
  metadataBase: new URL('https://www.therapie-familiale-systemique.com'),
  title: { default: 'Nadia El Ferkane-Blanc | Thérapeute familiale systémique', template: '%s | Nadia El Ferkane-Blanc' },
  description: 'Nadia El Ferkane-Blanc vous accompagne en thérapie individuelle, de couple et familiale à La Ciotat et Marseille.',
  keywords: ['thérapeute familiale','thérapie systémique','thérapie de couple','La Ciotat','Marseille'],
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'fr_FR', siteName: 'Nadia El Ferkane-Blanc', title: 'Nadia El Ferkane-Blanc | Thérapeute familiale systémique', description: 'Thérapie individuelle, de couple et familiale à La Ciotat et Marseille.', images: [{ url: '/images/nadia-el-ferkane-blanc.png', width: 578, height: 598 }] },
  twitter: { card: 'summary_large_image', title: 'Nadia El Ferkane-Blanc | Thérapeute familiale systémique', description: 'Thérapie individuelle, de couple et familiale à La Ciotat et Marseille.', images: ['/images/nadia-el-ferkane-blanc.png'] },
  robots: { index: true, follow: true },
};
export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#f5f1eb' };
export default function RootLayout({ children }) { return <html lang="fr"><body><a className="skip-link" href="#contenu">Aller au contenu</a><SiteHeader />{children}<SiteFooter /></body></html>; }
