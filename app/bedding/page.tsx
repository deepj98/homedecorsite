import Image from "next/image";
import Link from "next/link";

interface BeddingSubcategory {
  id: string;
  name: string;
  description: string;
  items: {
    name: string;
    imageUrl: string;
    alt: string;
    slug?: string;
  }[];
}

// Data is structured so it can later be loaded from an API or database.
const beddingSubcategories: BeddingSubcategory[] = [
  {
    id: "bedsheets",
    name: "Bedsheets",
    description: "Soft, breathable fabrics for everyday comfort.",
    items: [
      {
        name: "Cotton Bedsheet Set",
        imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
        alt: "Cotton bedsheet set on a double bed",
        slug: "cotton-bedsheet-set",
      },
      {
        name: "Patterned Bedsheet",
        imageUrl: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=600&q=80",
        alt: "Patterned bedsheet with cushions",
        slug: "patterned-bedsheet",
      },
    ],
  },
  {
    id: "pillows",
    name: "Pillows",
    description: "Supportive cushions for restful sleep.",
    items: [
      {
        name: "Memory Foam Pillow",
        imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
        alt: "Memory foam pillow on a bed",
        slug: "memory-foam-pillow",
      },
      {
        name: "Decorative Cushions",
        imageUrl: "https://images.unsplash.com/photo-1582719478250-cc968f699cd4?w=600&q=80",
        alt: "Decorative cushions arranged on a bed",
        slug: "decorative-cushions",
      },
    ],
  },
  {
    id: "curtains",
    name: "Curtains",
    description: "Light-filtering and blackout options for your bedroom.",
    items: [
      {
        name: "Sheer Curtains",
        imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
        alt: "Sheer curtains in a bright bedroom",
        slug: "sheer-curtains",
      },
      {
        name: "Blackout Curtains",
        imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80",
        alt: "Dark blackout curtains framing a window",
        slug: "blackout-curtains",
      },
    ],
  },
  {
    id: "comforters",
    name: "Comforters",
    description: "Layered warmth for every season.",
    items: [
      {
        name: "Quilted Comforter",
        imageUrl: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?w=600&q=80",
        alt: "Quilted comforter folded on a bed",
        slug: "quilted-comforter",
      },
      {
        name: "Lightweight Duvet",
        imageUrl: "https://images.unsplash.com/photo-1520256862855-398228c41684?w=600&q=80",
        alt: "Lightweight duvet on a neatly made bed",
        slug: "lightweight-duvet",
      },
    ],
  },
];

export default function BeddingPage() {
  return (
    <main className="bg-background-alt min-h-screen py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Page header */}
        <header className="mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">
            Bedding
          </h1>
          <p className="text-text-secondary max-w-2xl">
            Explore bedsheets, pillows, curtains, and comforters curated to
            bring warmth and elegance to your bedroom.
          </p>
        </header>

        {/* Subcategory pill bar that scrolls to each section */}
        <nav
          aria-label="Bedding subcategories"
          className="mb-12 flex flex-wrap gap-3"
        >
          <a
            href="#bedding-all"
            className="rounded-full border border-beige bg-white px-4 py-2 text-sm font-medium text-text-primary hover:bg-beige-light transition-colors"
          >
            All
          </a>
          {beddingSubcategories.map((subcategory) => (
            <a
              key={subcategory.id}
              href={`#${subcategory.id}`}
              className="rounded-full border border-beige bg-white px-4 py-2 text-sm font-medium text-text-primary hover:bg-beige-light transition-colors"
            >
              {subcategory.name}
            </a>
          ))}
        </nav>

        {/* "All" section shows every subcategory in order */}
        {/* <section id="bedding-all" className="space-y-12 mb-16 scroll-mt-24">
          {beddingSubcategories.map((subcategory) => (
            <SubcategorySection key={subcategory.id} subcategory={subcategory} />
          ))}
        </section> */}

        {/* Individual anchored sections (for when user jumps via pills) */}
        {beddingSubcategories.map((subcategory) => (
          <SubcategorySection
            key={subcategory.id}
            subcategory={subcategory}
            anchorId={subcategory.id}
          />
        ))}
      </div>
    </main>
  );
}

interface SubcategorySectionProps {
  subcategory: BeddingSubcategory;
  anchorId?: string;
}

// Reusable subcategory section so the layout stays consistent for "All" and anchored sections.
function SubcategorySection({
  subcategory,
  anchorId,
}: SubcategorySectionProps) {
  const sectionId = anchorId ?? `${subcategory.id}-inline`;

  return (
    <section id={sectionId} className="scroll-mt-24 mb-16">
      <header className="mb-3">
        <h2 className="text-2xl font-semibold text-text-primary">
          {subcategory.name}
        </h2>
        <p className="text-sm text-text-secondary mt-1">
          {subcategory.description}
        </p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategory.items.map((item) => (
          <article
            key={item.name}
            className="group rounded-2xl overflow-hidden bg-white border border-beige shadow-sm hover:shadow-md transition-shadow"
          >
            <Link href={`/products/${item.slug}`}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </Link>
            <div className="p-4">
              <h3 className="text-base font-medium text-text-primary">
                {item.name}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
