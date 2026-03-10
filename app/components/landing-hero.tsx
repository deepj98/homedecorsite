import Image from "next/image";
import heroImage from "@/public/herosectionimg.jpeg";

export function LandingHero() {
  return (
    <section id="landing" className="relative min-h-screen w-full flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Indian bedroom interior - home decor"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" aria-hidden />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          Home Decor by JD &amp; TJ
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-white/95 drop-shadow">
          Curated furnishings for your home
        </p>
      </div>
    </section>
  );
}
