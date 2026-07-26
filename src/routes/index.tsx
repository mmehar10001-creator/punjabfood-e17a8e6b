import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { menu } from "@/lib/menu-data";
import hero from "@/assets/hero-pulao.jpg";
import realPulao from "@/assets/real-pulao-single-nokabab.jpg";
import realRoast from "@/assets/real-roast-half.jpg";
import realKabab from "@/assets/real-shami-kabab.jpg";
import zarda from "@/assets/zarda.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Punjab Foods — Authentic Pulao & Kabab, Rawalpindi" },
      { name: "description", content: "Punjab Foods serves authentic Chicken Pulao, Roast, Kabab and full catering Deg menu in Rawalpindi. Home delivery available." },
      { property: "og:title", content: "Punjab Foods — Pulao & Kabab" },
      { property: "og:description", content: "Authentic Pulao, Roast & Kabab in Rawalpindi. Order or book catering Degs." },
      { property: "og:url", content: "https://punjabfood.lovable.app/" },
    ],
    links: [
      { rel: "canonical", href: "https://punjabfood.lovable.app/" },
      { rel: "preload", as: "image", href: hero, fetchpriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Punjab Foods",
          description: "Authentic Pulao, Roast, Kabab and catering Degs in Rawalpindi.",
          servesCuisine: ["Pakistani", "Punjabi"],
          priceRange: "$$",
          telephone: "+92-51-5706222",
          url: "https://punjabfood.lovable.app/",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Sirsyed Chowk, Tipu Road",
            addressLocality: "Rawalpindi",
            addressCountry: "PK",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = [
    { name: "Chicken Pulao", price: "from Rs. 430", img: realPulao },
    { name: "Chicken Roast", price: "from Rs. 700", img: realRoast },
    { name: "Shami Kabab", price: "Rs. 540 / dozen", img: realKabab },
    { name: "Zarda", price: "Rs. 150", img: zarda },
  ];
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative min-h-[600px] h-screen w-full overflow-hidden">
        <img src={hero} alt="Chicken Pulao" width={1920} height={1080} fetchPriority="high" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-5 sm:px-6">
          <p className="text-[10px] sm:text-xs tracking-[0.35em] sm:tracking-[0.4em] uppercase text-primary mb-5 sm:mb-6">Rawalpindi · Since Years</p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl text-foreground max-w-4xl leading-[1.05]">
            Punjab Foods — Authentic Pulao & Kabab in Rawalpindi
          </h1>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-foreground/80 font-serif italic">
            Pulao · Kabab · Roast · Deg
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full max-w-xs sm:max-w-none">
            <Link to="/menu" className="text-xs tracking-[0.25em] uppercase border border-primary px-6 sm:px-8 py-3.5 sm:py-4 text-primary hover:bg-primary hover:text-primary-foreground transition-all text-center">
              View Menu
            </Link>
            <Link to="/catering" className="text-xs tracking-[0.25em] uppercase bg-primary text-primary-foreground px-6 sm:px-8 py-3.5 sm:py-4 hover:bg-primary/90 transition-all text-center">
              Book Catering
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 sm:py-24 md:py-28 px-5 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs tracking-[0.35em] sm:tracking-[0.4em] uppercase text-primary mb-5 sm:mb-6">Our Story</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8">A taste of Punjab on every plate</h2>
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
            From the slow-cooked aroma of our signature Chicken Pulao to the smoky char of fresh Shami Kabab,
            every dish at Punjab Foods is prepared with traditional recipes, hand-picked spices, and the same
            care we'd serve our own family.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-5 sm:px-6 bg-card">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-10 sm:mb-12 flex-wrap gap-4">
            <div>
              <p className="text-xs tracking-[0.35em] sm:tracking-[0.4em] uppercase text-primary mb-3">Signature</p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">House Favourites</h2>
            </div>
            <Link to="/menu" className="text-xs tracking-[0.25em] uppercase text-primary border-b border-primary pb-1">
              Full Menu →
            </Link>
          </div>
          <div className="grid gap-5 sm:gap-6 grid-cols-2 lg:grid-cols-4">
            {featured.map((f) => (
              <div key={f.name} className="group">
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img src={f.img} alt={f.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl mt-3 sm:mt-4">{f.name}</h3>
                <p className="text-xs sm:text-sm text-primary mt-1">{f.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick menu preview */}
      <section className="py-16 sm:py-24 md:py-28 px-5 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs tracking-[0.35em] sm:tracking-[0.4em] uppercase text-primary mb-3">Menu</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">{menu[0].title}</h2>
          </div>
          <div className="space-y-4 sm:space-y-5">
            {menu[0].items.map((it, i) => (
              <div key={i} className="flex items-baseline gap-3 sm:gap-4 border-b border-border pb-3 sm:pb-4">
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-lg sm:text-xl">{it.name}</h3>
                  {it.desc && <p className="text-xs sm:text-sm text-muted-foreground italic">{it.desc}</p>}
                </div>
                <div className="hidden sm:block flex-1 border-b border-dotted border-border/60 mb-2" />
                <p className="text-primary font-medium text-sm sm:text-base whitespace-nowrap">{it.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 sm:mt-12">
            <Link to="/menu" className="text-xs tracking-[0.25em] uppercase border border-primary px-8 py-4 text-primary hover:bg-primary hover:text-primary-foreground transition-all inline-block">
              See Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Catering CTA */}
      <section className="relative py-20 sm:py-28 md:py-32 px-5 sm:px-6 overflow-hidden">
        <img src={realRoast} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="text-xs tracking-[0.35em] sm:tracking-[0.4em] uppercase text-primary mb-5 sm:mb-6">Weddings · Events · Functions</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl mb-5 sm:mb-6">Catering Deg Service</h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10">
            From a 10 kg Sada Pulao Deg to a 12 kg Mutton Qorma — we cater shadi, gham, and every occasion with a single phone call.
          </p>
          <Link to="/catering" className="text-xs tracking-[0.25em] uppercase bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-all inline-block">
            View Deg Menu
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

