"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

// links for dropdown on landing page, header drop down
const navLinks = [
  { label: "Categories", href: "#categories", subLinks: [
    { label: "Bedding", href: "#categories-bedding" }, //updated href from bed to bedding 
    { label: "Bath", href: "#categories-bath" },
    { label: "Kitchen", href: "#categories-kitchen" },
    { label: "Safety-Nets", href: "#categories-safety-nets" }, //updated href to categories-safety-nets
  ]},
  { label: "About", href: "#about" },
  // { label: "Contact", href: "#contact" },
];

export function Header() {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCategoriesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isBeddingPage = pathname === "/bedding";
  const isBathPage = pathname === "/bath";
  const isKitchenPage = pathname === "/kitchen";
  const isBeautificationPage = pathname === "/beautification";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-beige shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link
          href="/"
          className="text-xl font-semibold text-text-primary tracking-tight"
        >
          Home Decor by JD &amp; TJ
        </Link>
        {/* Right side: landing nav or bedding search, depending on route */}
        {isBeddingPage || isBathPage || isKitchenPage || isBeautificationPage ? (
          <form className="w-full max-w-xs">
            <input
              type="search"
              placeholder="Search bedding..."
              className="w-full rounded-full border border-beige bg-white px-4 py-2 text-sm text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-beige"
            />
          </form>
        ) : (
          <nav className="flex items-center gap-6">
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setCategoriesOpen((o) => !o)}
                className="flex items-center gap-1 rounded-xl px-4 py-2 text-text-primary hover:bg-beige-light transition-colors"
                aria-expanded={categoriesOpen}
                aria-haspopup="true"
              >
                Categories
                <svg className={`w-4 h-4 transition-transform ${categoriesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {categoriesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 rounded-2xl border border-beige bg-white shadow-lg py-2">
                  {navLinks[0].subLinks?.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-4 py-2 text-text-primary hover:bg-beige-light transition-colors rounded-lg mx-2"
                      onClick={() => setCategoriesOpen(false)}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="#about"
              className="rounded-xl px-4 py-2 text-text-primary hover:bg-beige-light transition-colors"
            >
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
