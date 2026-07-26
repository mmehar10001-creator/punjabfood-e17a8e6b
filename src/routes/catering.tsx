import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { degMenu, contact } from "@/lib/menu-data";
import deg from "@/assets/deg.jpg";

export const Route = createFileRoute("/catering")({
  head: () => ({
    meta: [
      { title: "Catering & Deg Menu — Punjab Foods" },
      { name: "description", content: "Order Pulao, Biryani, Qorma and Zarda Degs for weddings and events. Sada Pulao Deg from Rs. 10,000." },
      { property: "og:title", content: "Catering & Deg Menu — Punjab Foods" },
      { property: "og:description", content: "Full Deg menu for shadi, gham and events. One call away." },
      { property: "og:url", content: "https://punjabfood.lovable.app/catering" },
    ],
    links: [{ rel: "canonical", href: "https://punjabfood.lovable.app/catering" }],
  }),
  component: CateringPage,
});

function CateringPage() {
  return (
    <SiteLayout>
      <section className="relative pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-24 px-5 sm:px-6 overflow-hidden">
        <img src={deg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.35em] sm:tracking-[0.4em] uppercase text-primary mb-4">Catering Service</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl">Catering & Deg Menu</h1>
          <p className="mt-5 sm:mt-6 text-muted-foreground text-base sm:text-lg">
            Shadi, gham, aur har taqreeb par parcel aap ke paas — ek phone call par.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-20 sm:pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden border border-border">
            <table className="w-full">
              <thead className="bg-card">
                <tr>
                  <th className="text-left p-3 sm:p-5 text-xs uppercase tracking-[0.2em] text-primary">Dish</th>
                  <th className="text-left p-3 sm:p-5 text-xs uppercase tracking-[0.2em] text-primary hidden md:table-cell">Quantity</th>
                  <th className="text-right p-3 sm:p-5 text-xs uppercase tracking-[0.2em] text-primary">Price</th>
                </tr>
              </thead>
              <tbody>
                {degMenu.map((d, i) => (
                  <tr key={i} className="border-t border-border hover:bg-card/50 transition-colors">
                    <td className="p-3 sm:p-5 font-serif text-base sm:text-lg align-top">
                      <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
                        <span>{d.name}</span>
                        <span className="text-sm sm:text-base text-foreground/60" lang="ur" dir="rtl">{d.urdu}</span>
                      </div>
                      <p className="md:hidden text-xs text-muted-foreground italic mt-1">{d.qty}</p>
                    </td>
                    <td className="p-3 sm:p-5 text-muted-foreground text-sm hidden md:table-cell">{d.qty}</td>
                    <td className="p-3 sm:p-5 text-right text-primary font-medium whitespace-nowrap text-sm sm:text-base align-top">{d.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 sm:mt-16 text-center border border-primary/30 p-6 sm:p-10 bg-card">
            <h2 className="font-serif text-2xl sm:text-3xl mb-4">Place an Order</h2>
            <p className="text-muted-foreground mb-6">Call us directly for catering bookings and bulk orders.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              {contact.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/-/g, "")}`} className="text-sm tracking-wider border border-primary px-6 py-3 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                  {p}
                </a>
              ))}
              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm tracking-wider bg-[#25D366] text-white px-6 py-3 hover:bg-[#25D366]/90 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.134 1.585 5.929L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
