'use client';
import Link from './site-link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { phone, maps, links } from './site-config';

function InstagramIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    function escape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [open]);
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 761px)');
    function closeOnDesktop() {
      if (desktop.matches) setOpen(false);
    }
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);
  return (
    <header className="site-header">
      <div className="topline">
        <Link href={maps} target="_blank" rel="noreferrer">
          Argelanderstraße 75 · Bonn Südstadt <ArrowUpRight size={12} />
        </Link>
        <span>
          Di–Fr 11–19 Uhr <span className="dot">·</span> Sa 12–17 Uhr
        </span>
        <Link href={phone}>01516 7970350</Link>
      </div>
      <div className="masthead">
        <Link href="/" className="brand" aria-label="Lupercia Startseite">
          <picture>
            <source
              srcSet="/assets/lupercia-mark-280.webp 280w, /assets/lupercia-mark-420.webp 420w, /assets/lupercia-mark-600.webp 600w, /assets/lupercia-mark.webp 930w"
              sizes="(max-width: 760px) 140px, (max-width: 1120px) 168px, (max-width: 1307px) 15vw, 196px"
            />
            <Image
              className="header-brand-mark"
              src="/assets/lupercia-mark-420.webp"
              alt="Lupercia – Finest Teas & Tea Ceremonies"
              width={930}
              height={927}
              loading="eager"
              fetchPriority="high"
            />
          </picture>
        </Link>
        <button
          type="button"
          ref={toggle}
          className="menu-toggle"
          aria-controls="primary-nav"
          aria-expanded={open}
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className={`nav-wrap ${open ? 'is-open' : ''}`}>
        <nav id="primary-nav" aria-label="Hauptnavigation">
          {links.map(([href, text]) => (
            <Link
              key={href}
              href={href}
              aria-current={
                pathname.replace(/\/$/, '') === href ? 'page' : undefined
              }
              onClick={() => setOpen(false)}
            >
              {text}
            </Link>
          ))}
          <Link
            className="nav-visit"
            href="/salon#besuch"
            onClick={() => setOpen(false)}
          >
            Zu Besuch <ArrowUpRight size={16} />
          </Link>
          <Link
            className="nav-instagram"
            href="/maria#lupercias-reise"
            aria-label="Zur eingebetteten Instagram-Sektion"
            title="Instagram-Einblicke"
            onClick={() => setOpen(false)}
          >
            <InstagramIcon />
            <span>Instagram</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
