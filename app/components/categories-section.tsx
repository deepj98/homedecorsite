import { CategoryCard, type CategoryItem } from "./category-card";

const categories: { id: string; title: string; href: string; items: CategoryItem[] }[] = [
  {
    id: "categories-bed",
    title: "BEDDING",
    href: "/bedding",
    items: [
      { name: "Bedsheets", imageUrl: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&q=80", alt: "Bedsheets" },
      { name: "Pillows", imageUrl: "https://images.unsplash.com/photo-1584100936593-c0654b55a2e2?w=600&q=80", alt: "Pillows" },
      { name: "Curtains", imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80", alt: "Curtains" },
      { name: "Comforter", imageUrl: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80", alt: "Comforter" },
    ],
  },
  {
    id: "categories-bath",
    title: "BATH",
    href: "/bath",
    items: [
      { name: "Bath Towels", imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80", alt: "Bath towels" },
      { name: "Door Mats", imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", alt: "Door mats" },
      { name: "Hand Towels", imageUrl: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&q=80", alt: "Hand towels" },
      { name: "Anti-slip Bath Mat", imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80", alt: "Transparent anti-slip mat for bath floor" },
    ],
  },
  {
    id: "categories-kitchen",
    title: "KITCHEN",
    href: "/kitchen",
    items: [
      { name: "Set of Utensils", imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", alt: "Set of utensils" },
      { name: "Utensils Soaking Cloth", imageUrl: "https://images.unsplash.com/photo-1584990347492-2c256f738c3a?w=600&q=80", alt: "Utensils soaking cloth" },
      { name: "Knives / Gas Lighters", imageUrl: "https://images.unsplash.com/photo-1565183928294-7d22bb7c2d19?w=600&q=80", alt: "Knives and gas lighters" },
      { name: "Gas Stoves", imageUrl: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=600&q=80", alt: "Gas stoves" },
    ],
  },
  {
    id: "categories-beautification",
    title: "BEAUTIFICATION & SAFETY NETS",
    href: "/beautification",
    items: [
      { name: "Balcony Netting", imageUrl: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=600&q=80", alt: "Balcony netting" },
      { name: "Safety Nets", imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", alt: "Safety nets" },
      { name: "Decorative Nets", imageUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80", alt: "Decorative nets" },
      { name: "Window Nets", imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", alt: "Window nets" },
    ],
  },
];

export function CategoriesSection() {
  return (
    <section id="categories" className="bg-background-alt py-16 sm:py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-text-primary mb-12 text-center">
          Categories
        </h1>
        <div className="space-y-16">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} id={cat.id} title={cat.title} href={cat.href} items={cat.items} />
          ))}
        </div>
      </div>
    </section>
  );
}
