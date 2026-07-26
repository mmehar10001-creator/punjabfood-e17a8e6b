import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { menu } from "@/lib/menu-data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Punjab Foods Pulao, Roast & Kabab" },
      { name: "description", content: "Full menu: Chicken Pulao, Channa Pulao, Chicken Roast, Shami Kabab, Zarda and more. Prices in PKR." },
      { property: "og:title", content: "Menu — Punjab Foods" },
      { property: "og:description", content: "Pulao, Roast, Kabab, Zarda — complete price list." },
      { property: "og:url", content: "https://punjabfood.lovable.app/menu" },
    ],
    links: [{ rel: "canonical", href: "https://punjabfood.lovable.app/menu" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Menu",
          name: "Punjab Foods Menu",
          hasMenuSection: menu.map((section) => ({
            "@type": "MenuSection",
            name: section.title,
            hasMenuItem: section.items.map((it) => ({
              "@type": "MenuItem",
              name: it.name,
              description: it.desc,
              offers: { "@type": "Offer", price: it.price, priceCurrency: "PKR" },
            })),
          })),
        }),
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <SiteLayout>
      <section className="pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-16 px-5 sm:px-6 text-center">
        <p className="text-xs tracking-[0.35em] sm:tracking-[0.4em] uppercase text-primary mb-4">À la Carte</p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl">Our Menu</h1>
        <p className="mt-4 text-xl sm:text-2xl text-foreground/80" lang="ur" dir="rtl">ہمارا مینو</p>
        <p className="mt-5 sm:mt-6 text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
          Prepared fresh daily. All prices in Pakistani Rupees.
        </p>
      </section>

      <section className="px-5 sm:px-6 pb-20 sm:pb-24">
        <div className="mx-auto max-w-6xl space-y-16 sm:space-y-24">
          {menu.map((section) => (
            <div key={section.title}>
              <div className="text-center mb-10 sm:mb-12">
                <div className="inline-flex items-center gap-3 sm:gap-4">
                  <span className="h-px w-8 sm:w-12 bg-primary/60" />
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary">{section.title}</h2>
                  <span className="h-px w-8 sm:w-12 bg-primary/60" />
                </div>
                {section.urdu && (
                  <p className="mt-3 text-lg sm:text-xl text-foreground/70" lang="ur" dir="rtl">{section.urdu}</p>
                )}
              </div>
              <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((it, i) => (
                  <article key={i} className="group bg-card border border-border rounded-lg overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow">
                    {it.image && (
                      <div className="aspect-[4/3] overflow-hidden bg-secondary">
                        <img
                          src={it.image}
                          alt={it.name}
                          loading="lazy"
                          width={1024}
                          height={768}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-5 sm:p-6 flex-1 flex flex-col gap-2">
                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground leading-tight">
                        {it.name}
                      </h3>
                      {it.urdu && (
                        <p className="text-xl sm:text-2xl text-foreground font-medium" lang="ur" dir="rtl">
                          {it.urdu}
                        </p>
                      )}
                      {it.desc && (
                        <p className="text-sm sm:text-base text-muted-foreground">{it.desc}</p>
                      )}
                      <div className="mt-auto pt-3 border-t border-border/60">
                        <p className="text-xl sm:text-2xl font-bold text-primary">{it.price}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
