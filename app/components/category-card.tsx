import Image from "next/image";
import Link from "next/link";

export interface CategoryItem {
  name: string;
  imageUrl: string;
  alt: string;
}

interface CategoryCardProps {
  title: string;
  id: string;
  href: string;
  items: CategoryItem[];
}

export function CategoryCard({ title, id, href, items }: CategoryCardProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <Link href={href} className="inline-block">
        <h2 className="text-2xl font-semibold text-text-primary mb-6 hover:text-beige-dark transition-colors">{title}</h2>
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <Link
            key={item.name}
            href={href}
            className="group relative aspect-square rounded-2xl overflow-hidden bg-beige-light border border-beige shadow-sm hover:shadow-md transition-shadow"
          >
            <Image
              src={item.imageUrl}
              alt={item.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-0 left-0 right-0 p-3 text-white font-medium text-sm drop-shadow">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
