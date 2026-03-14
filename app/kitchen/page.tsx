import Image from "next/image";
import Link from "next/link";

interface KitchenSubcategory {
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

const kitchenSubcategories: KitchenSubcategory[] = [
  {
    id: "cookware",
    name: "Cookware",
    description: "Pots, pans, and essentials for every kitchen.",
    items: [
      {
        name: "Nonstick Frying Pan",
        imageUrl: "https://images.unsplash.com/photo-1505253211989-76d0fea1b2e8?w=600&q=80",
        alt: "Nonstick frying pan on stove",
        slug: "nonstick-frying-pan",
      },
      {
        name: "Stainless Steel Saucepan",
        imageUrl: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=600&q=80",
        alt: "Stainless steel saucepan",
        slug: "stainless-steel-saucepan",
      },
    ],
  },
  {
    id: "utensils",
    name: "Utensils",
    description: "Tools that make cooking easier and more fun.",
    items: [
      {
        name: "Silicone Utensil Set",
        imageUrl: "https://images.unsplash.com/photo-1598511728363-4f13421b97b9?w=600&q=80",
        alt: "Silicone kitchen utensils",
        slug: "silicone-utensil-set",
      },
      {
        name: "Wooden Spoon Set",
        imageUrl: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80",
        alt: "Wooden spoons in a jar",
        slug: "wooden-spoon-set",
      },
    ],
  },
  {
    id: "tableware",
    name: "Tableware",
    description: "Dinnerware & glassware for every meal.",
    items: [
      {
        name: "Dinner Plate Set",
        imageUrl: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=600&q=80",
        alt: "Stacked dinner plates",
        slug: "dinner-plate-set",
      },
      {
        name: "Glassware Set",
        imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80",
        alt: "Clear glassware set",
        slug: "glassware-set",
      },
    ],
  },
  {
    id: "storage",
    name: "Storage",
    description: "Keep your kitchen organized with smart storage.",
    items: [
      {
        name: "Airtight Storage Jars",
        imageUrl: "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?w=600&q=80",
        alt: "Airtight storage jars on shelf",
        slug: "airtight-storage-jars",
      },
      {
        name: "Stackable Containers",
        imageUrl: "https://images.unsplash.com/photo-1524594157363-6cbd0cdc6f35?w=600&q=80",
        alt: "Stackable kitchen containers",
        slug: "stackable-containers",
      },
    ],
  },
];

export default function KitchenPage() {
  return (
    <main className="bg-background-alt min-h-screen py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <header className="mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">
            Kitchen
          </h1>
          <p className="text-text-secondary max-w-2xl">
            Discover cookware, utensils, tableware, and storage solutions for your kitchen.
          </p>
        </header>

        <nav
          aria-label="Kitchen subcategories"
          className="mb-12 flex flex-wrap gap-3"
        >
          <a
            href="#kitchen-all"
            className="rounded-full border border-beige bg-white px-4 py-2 text-sm font-medium text-text-primary hover:bg-beige-light transition-colors"
          >
            All
          </a>
          {kitchenSubcategories.map((subcategory) => (
            <a
              key={subcategory.id}
              href={`#${subcategory.id}`}
              className="rounded-full border border-beige bg-white px-4 py-2 text-sm font-medium text-text-primary hover:bg-beige-light transition-colors"
            >
              {subcategory.name}
            </a>
          ))}
        </nav>

        {/* <section id="kitchen-all" className="space-y-12 mb-16 scroll-mt-24">
          {kitchenSubcategories.map((subcategory) => (
            <SubcategorySection key={subcategory.id} subcategory={subcategory} />
          ))}
        </section> */}

        {kitchenSubcategories.map((subcategory) => (
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
  subcategory: KitchenSubcategory;
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