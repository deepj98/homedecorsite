import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-beige-dark text-text-primary py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-semibold">Home Decor by JD &amp; TJ</span>
        <nav className="flex gap-6">
          <Link href="#categories" className="hover:underline">Categories</Link>
          <Link href="#about" className="hover:underline">About</Link>
        </nav>
      </div>
    </footer>
  );
}
