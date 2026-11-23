import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onJumpToUpcoming: () => void;
}

const NAV_LINKS = [
  { href: '#hero', label: 'الرئيسية' },
  { href: '#matches', label: 'المباريات والبرنامج' },
  { href: '#squad', label: 'التركيبة البشرية' },
  { href: '#analytics', label: 'تقييمات فلاشسكور' },
  { href: '#history', label: 'التاريخ والألقاب' },
];

export default function Navbar({ onJumpToUpcoming }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F7]/95 backdrop-blur-sm border-b border-stone-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Title */}
        <a
          href="#hero"
          className="font-display font-extrabold text-xl tracking-tight text-[#141212] hover:text-[#C8102E] transition-colors whitespace-nowrap shrink-0"
        >
          الوداد الرياضي
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#141212] hover:underline underline-offset-8 decoration-[#C8102E] decoration-2 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onJumpToUpcoming}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#C8102E] hover:bg-[#A30D25] transition-colors rounded-lg whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C8102E] cursor-pointer"
          >
            المواعيد القادمة
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-stone-200 text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#FAF9F7] px-4 py-4 space-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 px-3 text-sm font-medium text-stone-700 hover:text-[#C8102E] hover:bg-stone-100 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onJumpToUpcoming();
            }}
            className="w-full mt-2 py-2.5 px-4 text-sm font-semibold text-white bg-[#C8102E] hover:bg-[#A30D25] rounded-lg transition-colors cursor-pointer"
          >
            المواعيد القادمة
          </button>
        </div>
      )}
    </header>
  );
}
