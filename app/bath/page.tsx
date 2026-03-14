import Image from "next/image";
import Link from "next/link";

interface BathSubcategory {
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
const bathSubcategories: BathSubcategory[] = [
  {
    id: "towels",
    name: "Towels",
    description: "Soft and absorbent towels for your bathroom.",
    items: [
      {
        name: "Cotton Bath Towel Set",
        imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80", // Placeholder image
        alt: "Cotton bath towel set",
        slug: "cotton-bath-towel-set",
      },
      {
        name: "Microfiber Hand Towels",
        imageUrl: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=600&q=80", // Placeholder image
        alt: "Microfiber hand towels",
        slug: "microfiber-hand-towels",
      },
    ],
  },
  {
    id: "mats",
    name: "Bath Mats",
    description: "Non-slip mats for safety and comfort.",
    items: [
      {
        name: "Memory Foam Bath Mat",
        imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80", // Placeholder image
        alt: "Memory foam bath mat",
        slug: "memory-foam-bath-mat",
      },
      {
        name: "Rubber Bath Rug",
        imageUrl: "https://images.unsplash.com/photo-1582719478250-cc968f699cd4?w=600&q=80", // Placeholder image
        alt: "Rubber bath rug",
        slug: "rubber-bath-rug",
      },
    ],
  },
  {
    id: "accessories",
    name: "Bath Accessories",
    description: "Essential items to enhance your bathroom.",
    items: [
      {
        name: "Soap Dispenser",
        imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80", // Placeholder image
        alt: "Soap dispenser",
        slug: "soap-dispenser",
      },
      {
        name: "Toothbrush Holder",
        imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80", // Placeholder image
        alt: "Toothbrush holder",
        slug: "toothbrush-holder",
      },
    ],
  },
  {
    id: "shower-curtains",
    name: "Shower Curtains",
    description: "Stylish curtains for your shower area.",
    items: [
      {
        name: "Fabric Shower Curtain",
        imageUrl: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?w=600&q=80", // Placeholder image
        alt: "Fabric shower curtain",
        slug: "fabric-shower-curtain",
      },
      {
        name: "Plastic Shower Liner",
        imageUrl: "https://images.unsplash.com/photo-1520256862855-398228c41684?w=600&q=80", // Placeholder image
        alt: "Plastic shower liner",
        slug: "plastic-shower-liner",
      },
    ],
  },
];

export default function BathPage() {
  return (
    <main className="bg-background-alt min-h-screen py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Page header */}
        <header className="mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">
            Bath
          </h1>
          <p className="text-text-secondary max-w-2xl">
            Discover towels, mats, accessories, and shower curtains designed for comfort and style in your bathroom.
          </p>
        </header>

        {/* Subcategory pill bar that scrolls to each section */}
        <nav
          aria-label="Bath subcategories"
          className="mb-12 flex flex-wrap gap-3"
        >
          <a
            href="#bath-all"
            className="rounded-full border border-beige bg-white px-4 py-2 text-sm font-medium text-text-primary hover:bg-beige-light transition-colors"
          >
            All
          </a>
          {bathSubcategories.map((subcategory) => (
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
        {/* <section id="bath-all" className="space-y-12 mb-16 scroll-mt-24">
          {bathSubcategories.map((subcategory) => (
            <SubcategorySection key={subcategory.id} subcategory={subcategory} />
          ))}
        </section> */}

        {/* Individual anchored sections (for when user jumps via pills) */}
        {bathSubcategories.map((subcategory) => (
          <SubcategorySection
            key={`${subcategory.id}-individual`}
            subcategory={subcategory}
            anchorId={subcategory.id}
          />
        ))}
      </div>
    </main>
  );
}

interface SubcategorySectionProps {
  subcategory: BathSubcategory;
  anchorId?: string;
}

// Reusable subcategory section so the layout stays consistent for "All" and anchored sections.
function SubcategorySection({
  subcategory,
  anchorId,
}: SubcategorySectionProps) {
  const sectionId = anchorId ?? `${subcategory.id}-inline`;

  return (
    <section id={sectionId} className="scroll-mt-24 mb-6">
      <header className="mb-4">
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