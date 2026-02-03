import { Metadata } from 'next';
import Link from 'next/link';
import { ScrollText, Database, CheckCircle, FileText, Eye } from 'lucide-react';
import { Navbar } from '@/features/home/components/Navbar';
import { ContributorCTA } from '@/features/home/components/ContributorCTA';
import { WhatsAppChannelCTA } from '@/features/home/components/WhatsAppChannelCTA';

// ============================================================================
// SEO METADATA
// ============================================================================

export const metadata: Metadata = {
  title: 'BalungPisah - Gotong Royong Menyambung yang Terpisah',
  description:
    'Platform kolaborasi rakyat dan pemerintah. Rakyat urun data, AI menjernihkan, Pejabat menuntaskan. Kini hadir untuk Indonesia.',
  keywords: [
    'BalungPisah',
    'kolaborasi',
    'gotong royong',
    'pemerintah',
    'rakyat',
    'Indonesia',
    'AI',
    'data',
  ],
  openGraph: {
    title: 'BalungPisah - Gotong Royong Menyambung yang Terpisah',
    description:
      'Platform kolaborasi rakyat dan pemerintah. Rakyat urun data, AI menjernihkan, Pejabat menuntaskan.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'BalungPisah',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BalungPisah - Gotong Royong Menyambung yang Terpisah',
    description:
      'Platform kolaborasi rakyat dan pemerintah. Rakyat urun data, AI menjernihkan, Pejabat menuntaskan.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ============================================================================
// MAIN PAGE COMPONENT (SERVER COMPONENT)
// ============================================================================

export default function Home() {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      {/* ================================================================== */}
      {/* NAVBAR */}
      {/* ================================================================== */}
      <Navbar />

      {/* ================================================================== */}
      {/* HERO SECTION - FULL SCREEN */}
      {/* ================================================================== */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background Gradient Orbs */}
        <div className="bg-primary absolute top-1/4 left-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl" />
        <div className="bg-secondary absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full opacity-10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Brand Name - Using h1 for SEO */}
            <h1 className="text-foreground mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Balung<span className="text-primary">Pisah</span>
            </h1>

            {/* Tagline - Using p with semantic structure */}
            <p className="text-muted-foreground mx-auto mb-6 max-w-2xl text-lg leading-relaxed sm:text-xl md:text-2xl">
              Gotong Royong Menyambung yang terpisah.
              <br />
              <span className="text-foreground">Rakyat urun data,</span>{' '}
              <span className="text-primary">AI menjernihkan,</span>{' '}
              <span className="text-foreground">Pejabat menuntaskan.</span>
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="https://urun.balungpisah.id"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-lg font-bold transition-all duration-300 hover:scale-105"
              >
                <Database size={20} />
                Ikut Urun Data
              </Link>
              <Link
                href="/manifesto"
                className="border-primary/50 text-primary hover:bg-primary/10 inline-flex items-center gap-2 rounded-full border px-8 py-3.5 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <ScrollText size={20} />
                Baca Manifesto
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="border-muted-foreground flex h-10 w-6 items-start justify-center rounded-full border-2 p-2">
            <div className="bg-primary h-2 w-1 rounded-full" />
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* URUN PLATFORM SECTION */}
      {/* ================================================================== */}
      <section className="bg-card py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
              Kenalan dengan <span className="text-primary">Urun</span>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Platform untuk menyampaikan aspirasi dan melaporkan permasalahan di sekitarmu. Suaramu
              penting untuk perubahan.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mb-12 grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-background rounded-2xl border p-6 text-center">
              <div className="bg-primary/10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                <FileText className="text-primary" size={24} />
              </div>
              <h3 className="text-foreground mb-2 text-lg font-semibold">Laporkan Masalah</h3>
              <p className="text-muted-foreground text-sm">
                Sampaikan permasalahan di lingkunganmu dengan mudah dan terstruktur.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-background rounded-2xl border p-6 text-center">
              <div className="bg-primary/10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                <Eye className="text-primary" size={24} />
              </div>
              <h3 className="text-foreground mb-2 text-lg font-semibold">Pantau Progress</h3>
              <p className="text-muted-foreground text-sm">
                Lihat perkembangan laporanmu dan ketahui tindak lanjut yang dilakukan.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-background rounded-2xl border p-6 text-center">
              <div className="bg-primary/10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                <CheckCircle className="text-primary" size={24} />
              </div>
              <h3 className="text-foreground mb-2 text-lg font-semibold">Lihat Penyelesaian</h3>
              <p className="text-muted-foreground text-sm">
                Dapatkan notifikasi saat laporanmu ditindaklanjuti dan diselesaikan.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link
              href="https://urun.balungpisah.id"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-lg font-bold transition-all duration-300 hover:scale-105"
            >
              <Database size={20} />
              Mulai Sekarang
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* WHATSAPP CHANNEL CTA SECTION */}
      {/* ================================================================== */}
      <WhatsAppChannelCTA />

      {/* ================================================================== */}
      {/* CONTRIBUTOR CTA SECTION */}
      {/* ================================================================== */}
      <ContributorCTA />

      {/* ================================================================== */}
      {/* FOOTER */}
      {/* ================================================================== */}
      <footer className="bg-background py-8">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-muted-foreground text-sm">&copy; 2026 BalungPisah.id</p>
        </div>
      </footer>
    </div>
  );
}
