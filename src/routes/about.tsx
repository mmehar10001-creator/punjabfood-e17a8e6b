import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import kabab from "@/assets/kabab.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Punjab Foods — Our Story" },
      { name: "description", content: "Punjab Foods — authentic Pulao and Kabab restaurant in Rawalpindi, serving traditional Punjabi cuisine." },
      { property: "og:title", content: "About Punjab Foods" },
      { property: "og:description", content: "Traditional Punjabi cuisine, served from the heart of Rawalpindi." },
      { property: "og:url", content: "https://punjabfood.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://punjabfood.lovable.app/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-24 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">About Us</p>
            <h1 className="font-serif text-5xl md:text-6xl mb-8">About Punjab Foods</h1>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Punjab Foods is a family-run kitchen in Rawalpindi, born from a simple belief: that the best food
                comes from the oldest recipes — passed down, never compromised.
              </p>
              <p>
                Our pulao rice is hand-soaked, slow-cooked over open flame, and finished with whole spices ground
                in-house. Our kababs are shaped by hand, our roast charred to order, our zarda perfumed with kewra
                and saffron.
              </p>
              <p>
                Whether it's a single plate of Chicken Pulao or a 10-kilo deg for your wedding — we cook the same
                way, with the same heart.
              </p>
            </div>
          </div>
          <div className="aspect-[4/5] overflow-hidden">
            <img src={kabab} alt="Kabab" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
