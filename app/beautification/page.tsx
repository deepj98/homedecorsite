import Image from "next/image";
import Link from "next/link";

interface SafetyNetSubcategory {
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

const safetyNetSubcategories: SafetyNetSubcategory[] = [
  {
    id: "window-guards",
    name: "Window Guards",
    description: "Protective nets and guards for windows.",
    items: [
      {
        name: "Mesh Window Guard",
        imageUrl:
          "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
        alt: "Window guard mesh",
        slug: "mesh-window-guard",
      },
      {
        name: "Child Safety Window Guard",
        imageUrl:
          "https://images.unsplash.com/photo-1592928300884-efbd2fab1d6f?w=600&q=80",
        alt: "Window safety guard",
        slug: "child-window-guard",
      },
    ],
  },
  {
    id: "balcony-nets",
    name: "Balcony Nets",
    description: "Secure nets for balconies and open spaces.",
    items: [
      {
        name: "Polyester Balcony Net",
        imageUrl:
          "https://images.unsplash.com/photo-1560184897-1c464d4c8461?w=600&q=80",
        alt: "Balcony safety net",
        slug: "polyester-balcony-net",
      },
      {
        name: "Heavy Duty Balcony Net",
        imageUrl:
          "https://images.unsplash.com/photo-1528747045269-390fe33c19f0?w=600&q=80",
        alt: "Heavy duty balcony net",
        slug: "heavy-duty-balcony-net",
      },
    ],
  },
  {
    id: "stair-nets",
    name: "Stair Nets",
    description: "Safe barriers for stairs and open railings.",
    items: [
      {
        name: "Staircase Safety Net",
        imageUrl:
          "https://images.unsplash.com/photo-1544999395-07b1bdd94e6f?w=600&q=80",
        alt: "Stair safety net",
        slug: "staircase-safety-net",
      },
      {
        name: "Pet Stair Net",
        imageUrl:
          "https://images.unsplash.com/photo-1534430480870-2f3172d1c9c0?w=600&q=80",
        alt: "Pet safety net at stairs",
        slug: "pet-stair-net",
      },
    ],
  },
  {
    id: "door-nets",
    name: "Door Nets",
    description: "Keep doors safe with easy-install nets and barriers.",
    items: [
      {
        name: "Magnetic Door Net",
        imageUrl:
          "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=600&q=80",
        alt: "Door net installed",
        slug: "magnetic-door-net",
      },
      {
        name: "Retractable Door Net",
        imageUrl:
          "https://images.unsplash.com/photo-1520821872298-0d94d7d71528?w=600&q=80",
        alt: "Retractable door net",
        slug: "retractable-door-net",
      },
    ],
  },
];

export default function SafetyNetsPage() {
  return (
    <main className="bg-background-alt min-h-screen py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <header className="mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">
            Safety Nets
          </h1>
          <p className="text-text-secondary max-w-2xl">
            Keep your home safe with nets for windows, balconies, stairs, and doors.
          </p>
        </header>

        <nav
          aria-label="Safety Nets subcategories"
          className="mb-12 flex flex-wrap gap-3"
        >
          <a
            href="#safety-nets-all"
            className="rounded-full border border-beige bg-white px-4 py-2 text-sm font-medium text-text-primary hover:bg-beige-light transition-colors"
          >
            All
          </a>
          {safetyNetSubcategories.map((subcategory) => (
            <a
              key={subcategory.id}
              href={`#${subcategory.id}`}
              className="rounded-full border border-beige bg-white px-4 py-2 text-sm font-medium text-text-primary hover:bg-beige-light transition-colors"
            >
              {subcategory.name}
            </a>
          ))}
        </nav>

/* "All" section shows every subcategory in order */
        {/* <section
          id="safety-nets-all"
          className="space-y-12 mb-16 scroll-mt-24"
        >
          {safetyNetSubcategories.map((subcategory) => (
            <SubcategorySection
              key={subcategory.id}
              subcategory={subcategory}
            />
          ))}
        </section> */}

        {safetyNetSubcategories.map((subcategory) => (
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
  subcategory: SafetyNetSubcategory;
  anchorId?: string;
}

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