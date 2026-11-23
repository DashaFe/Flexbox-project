import { useState } from 'react';
import styles from './Header.module.css';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#services', label: 'Services' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.logo} href="#top" aria-label="Pex — Photoshop website template">
          <span className={styles.logoMark}>pex</span>
          <span className={styles.logoText}>Photoshop Website template</span>
        </a>

        <button
          type="button"
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="main-menu"
          onClick={() => setOpen(!open)}
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>

        <div id="main-menu" className={`${styles.menu} ${open ? styles.menuOpen : ''}`}>
          <nav aria-label="Main navigation">
            <ul className={styles.list}>
              {LINKS.map((link, index) => (
                <li key={link.href}>
                  <a
                    className={`${styles.link} ${index === 0 ? styles.active : ''}`}
                    href={link.href}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <form className={styles.search} role="search" action="#" onSubmit={(e) => e.preventDefault()}>
            <input
              className={styles.input}
              type="search"
              name="q"
              placeholder="Search Website"
              aria-label="Search website"
            />
            <button className={styles.searchButton} type="submit" aria-label="Search">
              <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                <circle cx="6.5" cy="6.5" r="5" fill="none" stroke="#a9a9b0" strokeWidth="2" />
                <line x1="10.5" y1="10.5" x2="15" y2="15" stroke="#a9a9b0" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
