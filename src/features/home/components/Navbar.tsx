'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';

export function Navbar() {
  return (
    <nav className="bg-background/95 border-border/50 fixed top-0 right-0 left-0 z-50 border-b px-4 py-4 backdrop-blur-sm sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-foreground text-xl font-bold">
            Balung<span className="text-primary">Pisah</span>
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <div className="bg-primary/20 text-primary border-primary/40 rounded-full border px-3 py-1.5 text-xs font-medium">
            Segera Hadir
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
