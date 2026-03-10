export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-text-primary mb-12 text-center">
          About
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="rounded-2xl bg-beige-light border border-beige p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-text-primary mb-3">About us</h2>
            <p className="text-text-secondary leading-relaxed">
              Home Decor by JD &amp; TJ brings you curated furnishings and decor for every room—bed, bath, kitchen, and beyond. We focus on quality, comfort, and style to help you create a home you love.
            </p>
          </div>
          <div className="rounded-2xl bg-beige-light border border-beige p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-text-primary mb-3">Contact</h2>
            <p className="text-text-secondary leading-relaxed">
              Get in touch for orders and enquiries.
            </p>
            <ul className="mt-3 space-y-1 text-text-secondary">
              <li>Email: contact@homedecorjd-tj.com</li>
              <li>Phone: +91 XXXXX XXXXX</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-beige-light border border-beige p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-text-primary mb-3">Store location</h2>
            <p className="text-text-secondary leading-relaxed">
              Visit our store to explore our full range in person.
            </p>
            <address className="mt-3 not-italic text-text-secondary">
              [Store address to be updated]
            </address>
          </div>
          <div className="rounded-2xl bg-beige-light border border-beige p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-text-primary mb-3">Upcoming events / exhibitions</h2>
            <p className="text-text-secondary leading-relaxed">
              Stay tuned for pop-ups and exhibitions. Follow us for dates and venues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
