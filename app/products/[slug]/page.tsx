import Image from "next/image";
import Link from "next/link";

interface Product {
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  price: string;
  shortDescription: string;
  description: string;
  specs: { label: string; value: string }[];
  images: { url: string; alt: string }[];
}

// Static placeholder data; later this can be loaded from your database/API.
const PRODUCTS: Product[] = [
  {
    slug: "cotton-bedsheet-set",
    name: "Cotton Bedsheet Set – Queen",
    category: "Bedding",
    subcategory: "Bedsheets",
    price: "₹2,499",
    shortDescription: "Soft 100% cotton bedsheet with two matching pillow covers.",
    description:
      "This queen size bedsheet set is crafted from breathable 100% cotton for everyday comfort. The subtle pattern blends easily with a variety of bedroom styles while the smooth finish feels gentle on the skin.",
    specs: [
      { label: "Size", value: "Queen" },
      { label: "Fabric", value: "100% Cotton" },
      { label: "Thread count", value: "Approx. 300 TC" },
      { label: "Set includes", value: "1 bedsheet + 2 pillow covers" },
      { label: "Care", value: "Machine wash cold, gentle cycle" },
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
        alt: "Cotton bedsheet set on a queen size bed",
      },
      {
        url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80",
        alt: "Close-up of patterned cotton bedsheet fabric",
      },
    ],
  },
];

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const resolvedParam = await params;
  const slug = resolvedParam.slug;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return (
      <main className="bg-background-alt min-h-screen py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-text-secondary">Product not found.</p>
          <Link
            href="/bedding"
            className="mt-4 inline-block text-sm text-text-primary underline"
          >
            Back to Bedding
          </Link>
        </div>
      </main>
    );
  }

  const primaryImage = product.images[0];
  const secondaryImages = product.images.slice(1);

  return (
    <main className="bg-background-alt min-h-screen py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Breadcrumb + back link */}
        <nav
          aria-label="Breadcrumb"
          className="text-xs sm:text-sm text-text-secondary flex flex-wrap gap-1 sm:gap-2"
        >
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <Link href="/bedding" className="hover:underline">
            Bedding
          </Link>
          <span>/</span>
          <span className="text-text-primary">{product.name}</span>
        </nav>

        {/* Hero area: image + essentials */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          <div className="space-y-3">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-beige-light border border-beige shadow-sm">
              <Image
                src={primaryImage.url}
                alt={primaryImage.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {secondaryImages.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {secondaryImages.map((img) => (
                  <div
                    key={img.url}
                    className="relative aspect-[4/3] overflow-hidden rounded-xl bg-beige-light"
                  >
                    <Image
                      src={img.url}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="33vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-text-secondary">
                {product.category} · {product.subcategory}
              </p>
              <h1 className="mt-1 text-2xl sm:text-3xl font-bold text-text-primary">
                {product.name}
              </h1>
            </div>
            <p className="text-text-secondary">{product.shortDescription}</p>

            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-semibold text-text-primary">
                {product.price}
              </span>
              <span className="text-xs uppercase tracking-wide text-emerald-700">
                In stock
              </span>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-beige-dark px-6 py-2 text-sm font-medium text-text-primary shadow-sm hover:shadow-md hover:bg-beige transition"
              >
                Enquire on WhatsApp
              </a>
              <a
                href="tel:+91XXXXXXXXXX"
                className="inline-flex items-center justify-center rounded-full border border-beige px-6 py-2 text-sm font-medium text-text-primary hover:bg-beige-light transition"
              >
                Call store
              </a>
            </div>
          </div>
        </section>

        {/* Details and specifications */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-lg font-semibold text-text-primary">
              Product details
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-text-primary">
              Specifications
            </h2>
            <dl className="space-y-2 text-sm">
              {product.specs.map((spec) => (
                <div key={spec.label} className="flex justify-between gap-4">
                  <dt className="text-text-secondary">{spec.label}</dt>
                  <dd className="text-text-primary text-right">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Placeholder for reviews / reassurance */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-beige pt-10">
          <div>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              Reviews
            </h2>
            <p className="text-sm text-text-secondary">
              Reviews and ratings coming soon. Be the first to share your
              experience with this product.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              Store information
            </h2>
            <p className="text-sm text-text-secondary">
              Home Decor by JD &amp; TJ · [Store address to be updated]. Visit
              our store to see this product in person or contact us for
              availability and delivery options.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

