import { createFileRoute } from "@tanstack/react-router";
import { Leaf, ShieldCheck, Sparkles, Moon, Package, Star, Check, ChevronDown, Footprints, Heart, Wind, X, AlertTriangle, Sun } from "lucide-react";
import { useState, createContext, useContext, useCallback, type ReactNode } from "react";
import { submitLead } from "@/lib/api/leads.functions";
import { trackEvent } from "@/lib/meta-pixel";
import productBox from "@/assets/foot-detox-box.jpg";
import feetWithPatches from "@/assets/feet-with-patches.jpg";
import tiredWoman from "@/assets/tired-woman.jpg";
import brandLogo from "@/assets/jeevan-tatva-logo.png";
import transformation from "@/assets/transformation.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Visarth Veda Foot Detox Patch — Wake Up Feeling Lighter" },
      { name: "description", content: "Visarth Veda Foot Detox Patches help refresh tired feet, support restful sleep and gentle natural detox. 100% plant-based, gentle & safe." },
      { property: "og:title", content: "Visarth Veda Foot Detox Patch" },
      { property: "og:description", content: "Wake up feeling lighter — natural foot detox patches with bamboo vinegar, tourmaline & wormwood." },
      { property: "og:image", content: productBox },
    ],
  }),
  component: LandingPage,
});

const signs = [
  { icon: Footprints, text: "Tired, heavy feet" },
  { icon: Moon, text: "Restless sleep at night" },
  { icon: Heart, text: "Sluggish body feeling" },
  { icon: Wind, text: "Low energy after work" },
  { icon: Sparkles, text: "Swelling in feet & ankles" },
  { icon: Sun, text: "Need to feel refreshed" },
];

const benefits = [
  "Supports internal balance",
  "Promotes restful sleep",
  "Refreshes tired feet",
  "Helps detox naturally",
  "Easy overnight routine",
  "Plant-based & gentle",
];

const steps = [
  { n: "1", t: "Clean your feet", d: "Wash and pat dry before bedtime." },
  { n: "2", t: "Peel & place patch", d: "Apply one patch on each foot sole." },
  { n: "3", t: "Wear overnight", d: "Sleep with patches for 6-8 hours." },
  { n: "4", t: "Remove in morning", d: "Discard and wash feet to feel lighter." },
];

import review1 from "@/assets/review-1.png";
import review2 from "@/assets/review-2.png";
import review3 from "@/assets/review-3.png";

const testimonials = [
  { q: "Raat ko lagaya, subah feet ekdum halke feel hue. Neend bhi acchi aayi.", n: "Sunita Sharma", c: "Jaipur", t: "Restful sleep", img: review1 },
  { q: "Din bhar khade rehne ke baad ye patches mere liye relief ban gaye hain.", n: "Rajesh Iyer", c: "Kochi", t: "Refreshed feet", img: review2 },
  { q: "Plant-based ingredients hain, isliye family ke saath use kar rahi hoon.", n: "Anita Desai", c: "Pune", t: "Natural & safe", img: review3 },
];

const faqs = [
  { q: "How do I use the foot detox patch?", a: "Clean and dry your feet at bedtime, peel the patch, place one on each sole, and wear overnight for 6-8 hours. Remove and rinse feet in the morning." },
  { q: "Is it safe for daily use?", a: "Yes, Visarth Veda Foot Detox Patches are made with plant-based ingredients and are gentle for nightly use." },
  { q: "What's inside the patch?", a: "A natural blend of Bamboo Vinegar, Tourmaline, Wormwood, Loquat Leaf and Vitamin C — traditionally used in wellness routines." },
  { q: "Will I see anything on the patch in the morning?", a: "It is normal for the patch to look darker or moist in the morning as it absorbs sweat and moisture from your feet overnight." },
  { q: "How long should I use it?", a: "For best results we recommend a consistent 45-day routine — one patch per foot, every night." },
  { q: "Is it suitable for all skin types?", a: "Yes, it's designed for all skin types. If you have sensitive skin or a medical condition, please consult your doctor first." },
];

const OrderCtx = createContext<() => void>(() => {});
const useOrder = () => useContext(OrderCtx);

function CTAButton({ children, className = "", full = false }: { children: ReactNode; className?: string; full?: boolean }) {
  const open = useOrder();
  return (
    <button type="button" onClick={open} className={`btn-primary ${full ? "w-full" : ""} ${className}`}>
      {children}
    </button>
  );
}

function LandingPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => {
    setOpen(true);
    try {
      trackEvent("InitiateCheckout", {
        content_name: "visarthveda_foot_detox_patch",
        content_category: "detox_patch",
      });
    } catch (err) {
      console.error("Failed to track pixel InitiateCheckout event:", err);
    }
  }, []);
  return (
    <OrderCtx.Provider value={handleOpen}>
      <div className="min-h-screen">
        <Nav />
        <Hero />
        <Signs />
        <Wisdom />
        <MeetProduct />
        <Routine />
        <Testimonials />
        <HeroIngredient />
        <WhyChoose />
        <Offer />
        <FAQ />
        <FinalCTA />
        <Footer />
        <StickyFooter />
        {open && <CODModal onClose={() => setOpen(false)} />}
      </div>
    </OrderCtx.Provider>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[color-mix(in_oklab,var(--cream)_85%,transparent)] border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-20 md:h-24 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={brandLogo} alt="Visarth Veda" className="h-28 md:h-36 w-auto" />
        </a>
        <CTAButton className="text-sm !py-2.5 !px-5">
          <Package className="h-4 w-4" /> Buy 1 Get 1 Free
        </CTAButton>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden leaf-bg">
      <div className="mx-auto max-w-7xl px-6 py-6 md:py-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="mobile-center">
          <span className="eyebrow"><Leaf className="h-3.5 w-3.5" /> Presented by nature</span>
          <h1 className="mt-6 font-display text-5xl md:text-6xl leading-[1.05] font-medium text-foreground">
            Gym Jaake Bhi <span className="text-primary italic">Weight Loss</span> Nahi Ho Raha? Wake Up Feeling Lighter — With Visarth Veda Foot Detox Patch
          </h1>
          <p className="mt-4 text-base md:text-lg font-medium text-primary">
            Diet ki thakaan, gym ki mehnat — phir bhi result zero? Try the overnight routine thousands are switching to.
          </p>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Visarth Veda Foot Detox Patches use a plant-based blend of Bamboo Vinegar, Tourmaline and Wormwood to refresh tired feet, support restful sleep and a gentle natural detox — overnight.
          </p>
          <div className="mt-6 max-w-md mx-auto md:mx-0">
            <img src={transformation} alt="Real transformation — before and after using Visarth Veda Foot Detox Patch" loading="lazy" className="rounded-2xl shadow-[var(--shadow-soft)] border border-border w-full object-cover" />
            <p className="mt-2 text-xs text-muted-foreground text-center md:text-left italic">Real results from a consistent overnight routine.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
            {["100% Natural", "Plant Based", "Gentle & Safe", "Overnight Use"].map((c) => (
              <span key={c} className="chip"><Check className="h-3.5 w-3.5 text-primary" />{c}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6 justify-center md:justify-start">
            <CTAButton>Order Foot Detox Patch Today</CTAButton>
            <div className="flex items-center gap-2">
              <div className="flex text-[color:var(--gold)]">{[...Array(5)].map((_,i)=><Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <span className="text-sm text-muted-foreground">Trusted by Indian families</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-soft)] ring-1 ring-border bg-card">
            <img src={productBox} alt="Visarth Veda Foot Detox Patch — 45 pads, 45 days supply" width={1024} height={1024} className="w-full h-auto object-cover" />
          </div>
          <div className="absolute -bottom-5 -left-5 bg-card rounded-2xl shadow-[var(--shadow-soft)] border border-border px-4 py-3 flex items-center gap-3">
            <span className="h-9 w-9 rounded-full bg-primary/10 text-primary grid place-items-center"><Package className="h-4 w-4" /></span>
            <div>
              <div className="text-sm font-semibold">45 Days Supply</div>
              <div className="text-xs text-muted-foreground">45 patches per pack</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Signs() {
  return (
    <section className="bg-[var(--cream-deep)] border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="mobile-center">
          <span className="eyebrow">The Signs</span>
          <h2 className="mt-6 text-4xl md:text-5xl font-medium leading-tight">
            Pair Bhaari Lagte Hain? Body Dheere-Dheere <span className="text-primary italic">Signal Deti Hai</span>
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {signs.map((s) => (
              <div key={s.text} className="flex items-center gap-3 bg-card rounded-xl px-4 py-3 border border-border">
                <s.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{s.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img src={tiredWoman} alt="Tired fatigued woman feeling low energy" loading="lazy" width={1024} height={768} className="rounded-2xl shadow-[var(--shadow-soft)] object-cover h-72 w-full" />
        </div>
      </div>
    </section>
  );
}

function Wisdom() {
  return (
    <section className="relative leaf-bg">
      <div className="mx-auto max-w-7xl px-6 py-6 grid md:grid-cols-2 gap-12 items-center">
        <img src={productBox} alt="Visarth Veda Foot Detox Patch packaging" loading="lazy" width={1024} height={1024} className="rounded-3xl shadow-[var(--shadow-soft)] order-2 md:order-1 object-cover" />
        <div className="order-1 md:order-2 mobile-center">
          <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> Traditional Wisdom</span>
          <h2 className="mt-6 text-4xl md:text-5xl font-medium leading-tight">
            Why Foot Patches Are <span className="text-primary italic">Trusted For Natural Detox</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            For generations, the soles of the feet have been seen as a key wellness zone. Visarth Veda combines time-honoured plant ingredients like Bamboo Vinegar, Wormwood and Loquat Leaf in an easy overnight patch — pure, gentle and preservative-free.
          </p>
          <ul className="mt-6 space-y-3">
            {["Traditionally used herbal ingredients", "Bamboo Vinegar + Tourmaline blend", "Plant-based & vegetarian", "No harsh chemicals or fillers"].map((t) => (
              <li key={t} className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5" /><span>{t}</span></li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-muted-foreground italic border-l-2 border-[color:var(--gold)] pl-3">
            Disclaimer: This is a wellness product and not a replacement for medical treatment. If you have a medical condition, please consult your doctor before use.
          </p>
        </div>
      </div>
    </section>
  );
}

function MeetProduct() {
  return (
    <section className="bg-[var(--cream-deep)] border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="mobile-center">
          <span className="eyebrow">Meet The Product</span>
          <h2 className="mt-6 text-4xl md:text-5xl font-medium leading-tight">
            Meet <span className="text-primary italic">Visarth Veda</span> Foot Detox Patch
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 bg-card rounded-xl px-4 py-3 border border-border">
                <span className="h-7 w-7 rounded-full bg-primary/10 text-primary grid place-items-center flex-shrink-0"><Check className="h-4 w-4" /></span>
                <span className="text-sm font-medium">{b}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center md:justify-start">
            <CTAButton>Try Visarth Veda Today</CTAButton>
          </div>
        </div>
        <img src={productBox} alt="Visarth Veda Foot Detox Patch box and sachets" loading="lazy" width={1024} height={1024} className="rounded-3xl shadow-[var(--shadow-soft)] object-cover" />
      </div>
    </section>
  );
}

function Routine() {
  return (
    <section className="leaf-bg">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Simple Routine</span>
          <h2 className="mt-6 text-4xl md:text-5xl font-medium leading-tight">A Simple Bedtime Routine For <span className="text-primary italic">Lighter Mornings</span></h2>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {steps.map((s) => (
            <div key={s.n} className="bg-card border border-border rounded-xl p-4 shadow-sm text-center">
              <div className="h-9 w-9 rounded-full bg-primary text-primary-foreground grid place-items-center font-display text-lg font-semibold mx-auto">{s.n}</div>
              <h3 className="mt-3 font-semibold text-base">{s.t}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground italic">Consistency is key — use every night for best results.</p>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="leaf-bg">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Real Stories</span>
          <h2 className="mt-6 text-4xl md:text-5xl font-medium leading-tight">Real People. <span className="text-primary italic">Real Bedtime Routine.</span></h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure key={t.n} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
              <img src={t.img} alt={`Visarth Veda foot detox patch result — ${t.n}`} loading="lazy" className="w-full h-56 object-cover" />
              <div className="p-6">
                <div className="flex text-[color:var(--gold)] mb-3">{[...Array(5)].map((_,i)=><Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <blockquote className="text-foreground">"{t.q}"</blockquote>
                <figcaption className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{t.n}</div>
                    <div className="text-xs text-muted-foreground">{t.c}</div>
                  </div>
                  <span className="chip text-xs"><Leaf className="h-3 w-3 text-primary" />{t.t}</span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroIngredient() {
  return (
    <section className="bg-[var(--cream-deep)] border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-6 grid md:grid-cols-2 gap-12 items-center">
        <img src={feetWithPatches} alt="Detox patches on feet overnight" loading="lazy" width={1024} height={1024} className="rounded-3xl shadow-[var(--shadow-soft)] object-cover" />
        <div className="mobile-center">
          <span className="eyebrow">The Hero Ingredients</span>
          <h2 className="mt-6 text-4xl md:text-5xl font-medium leading-tight">Power Of <span className="text-primary italic">Bamboo & Wormwood</span></h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Bamboo Vinegar, Tourmaline, Wormwood, Loquat Leaf and Vitamin C — a traditionally used blend, sealed inside a soft, breathable patch that works while you sleep. Carefully formulated, gentle on skin, and free from harsh additives.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {["Bamboo Vinegar", "Tourmaline", "Wormwood & Loquat Leaf", "Added Vitamin C"].map((t) => (
              <li key={t} className="flex items-start gap-2"><Check className="h-5 w-5 text-primary mt-0.5" /><span className="text-sm">{t}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const items = [
    { i: ShieldCheck, t: "Premium natural ingredients" },
    { i: Sparkles, t: "Plant-based formulation" },
    { i: Leaf, t: "No harsh chemicals" },
    { i: Moon, t: "Easy overnight use" },
    { i: Sun, t: "Made for daily wellness" },
    { i: Heart, t: "Gentle & safe routine" },
  ];
  return (
    <section className="leaf-bg">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Our Promise</span>
          <h2 className="mt-6 text-4xl md:text-5xl font-medium leading-tight">Why Choose <span className="text-primary italic">Visarth Veda</span> Foot Detox Patch?</h2>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
          {items.map((it) => (
            <div key={it.t} className="bg-card border border-border rounded-xl p-4 flex items-center gap-3 shadow-sm text-center md:text-left">
              <span className="h-9 w-9 rounded-xl bg-primary/10 text-primary grid place-items-center flex-shrink-0 mx-auto md:mx-0"><it.i className="h-4 w-4" /></span>
              <h3 className="font-semibold text-sm">{it.t}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section id="offer" className="bg-[var(--cream-deep)] border-y border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Limited Stock</span>
          <h2 className="mt-6 text-4xl md:text-5xl font-medium leading-tight">Start Your <span className="text-primary italic">45 Days Detox</span> Routine</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-8 items-center bg-card rounded-3xl p-8 border-2 border-[color:var(--gold)] shadow-[var(--shadow-soft)]">
          <img src={productBox} alt="Visarth Veda Foot Detox Patch" loading="lazy" width={1024} height={1024} className="rounded-2xl object-cover" />
          <div className="mobile-center">
            <span className="inline-block px-3 py-1 rounded-full bg-[color:var(--gold)]/20 text-primary text-xs font-semibold uppercase tracking-wider">Special Offer</span>
            <h3 className="mt-4 text-3xl font-display font-medium">Visarth Veda Foot Detox Patch</h3>
            <div className="mt-4 flex flex-wrap items-center gap-3 justify-center md:justify-start">
              <span className="text-4xl font-display font-semibold text-primary">Buy 1 Get 1 FREE</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Order today and get a second 45-patch pack absolutely free.</p>
            <ul className="mt-6 space-y-2">
              {["Refreshes tired feet", "Promotes restful sleep", "Supports natural detox", "Plant-based & gentle", "45 days supply — 45 patches"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-primary" />{t}</li>
              ))}
            </ul>
            <div className="mt-6">
              <CTAButton full><Package className="h-4 w-4" /> Order Now</CTAButton>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground justify-center md:justify-start">
              <span className="flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5" /> Safe Checkout</span>
              <span className="flex items-center gap-1"><Package className="h-3.5 w-3.5" /> Fast Delivery</span>
              <span className="flex items-center gap-1"><Leaf className="h-3.5 w-3.5" /> 100% Natural</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="leaf-bg">
      <div className="mx-auto max-w-3xl px-6 py-6">
        <div className="text-center">
          <span className="eyebrow">Your Questions</span>
          <h2 className="mt-6 text-4xl md:text-5xl font-medium leading-tight">Frequently Asked <span className="text-primary italic">Questions</span></h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="bg-card border border-border rounded-2xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between text-left p-5 font-medium">
                <span>{f.q}</span>
                <ChevronDown className={`h-5 w-5 text-primary transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-5 pb-5 text-muted-foreground text-sm">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const open = useOrder();
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-[oklch(0.28_0.06_150)]" />
      <div className="relative mx-auto max-w-4xl px-6 py-6 text-center text-primary-foreground">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[color:var(--gold)] text-xs font-semibold uppercase tracking-widest border border-white/20">
          <Leaf className="h-3.5 w-3.5" /> Start Tonight
        </span>
        <h2 className="mt-6 text-4xl md:text-5xl font-medium leading-tight">Light Feet, Better Sleep — <span className="text-[color:var(--gold)] italic">Aaj Raat Se Start Kijiye</span></h2>
        <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">Add Visarth Veda Foot Detox Patch to your bedtime routine and wake up feeling lighter, naturally.</p>
        <div className="mt-8 flex justify-center">
          <img src={feetWithPatches} alt="Relaxed feet with Visarth Veda detox patches" loading="lazy" className="rounded-2xl shadow-xl max-h-64 object-cover" />
        </div>
        <button type="button" onClick={open} className="cta-pulse mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[color:var(--gold)] text-foreground font-semibold shadow-xl">
          <Package className="h-4 w-4" /> Order Visarth Veda Now
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--cream-deep)] border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={brandLogo} alt="Visarth Veda" className="h-9 w-auto" />
        </div>
        <div className="text-sm text-muted-foreground flex items-center gap-3">
          <span className="px-2 py-0.5 rounded-full bg-[color:var(--gold)]/20 text-primary text-xs font-semibold">Buy 1 Get 1 Free</span>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Visarth Veda. All rights reserved.</p>
      </div>
    </footer>
  );
}

function StickyFooter() {
  const open = useOrder();
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-card/95 backdrop-blur border-t border-border shadow-[0_-6px_24px_-12px_rgba(0,0,0,0.25)]">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-3">
        <div className="hidden sm:block">
          <div className="font-semibold text-sm text-primary">Buy 1 Get 1 Free</div>
          <div className="text-xs text-muted-foreground">Limited time offer</div>
        </div>
        <button type="button" onClick={open} className="btn-primary flex-1 sm:flex-none text-sm !py-3 !px-6">
          <Package className="h-4 w-4" /> Order Now
        </button>
      </div>
    </div>
  );
}

function CODModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", city: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showDuplicateModal, setShowDuplicateModal] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.length > 100) e.name = "Please enter your name";
    if (!/^\d{10}$/.test(form.contact.trim())) e.contact = "Enter valid 10-digit number";
    if (!form.city.trim() || form.city.length < 2 || form.city.length > 100) e.city = "Please enter your city";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setError(null);

    const phoneKey = form.contact.trim().replace(/[\s\-()]+/g, "");

    try {
      const storedLeads = localStorage.getItem("VV_SUBMITTED_LEADS");
      const leadsMap = storedLeads ? JSON.parse(storedLeads) : {};
      const lastSubmitTime = leadsMap[phoneKey];
      if (lastSubmitTime) {
        const timePassed = Date.now() - new Date(lastSubmitTime).getTime();
        if (timePassed < 24 * 60 * 60 * 1000) {
          setShowDuplicateModal(true);
          setSubmitting(false);
          return;
        }
      }
    } catch (err) {
      console.warn("localStorage read failed:", err);
    }

    try {
      const res = await submitLead({
        data: { name: form.name, contact: form.contact, city: form.city },
      });

      if (res.success) {
        setSubmitted(true);

        // Track Meta Pixel Lead event
        try {
          trackEvent("Lead", {
            content_name: "visarthveda_foot_detox_patch",
            content_category: "detox_patch",
          });
        } catch (err) {
          console.error("Failed to track pixel Lead event:", err);
        }

        // Track Meta Pixel Purchase event
        try {
          trackEvent("Purchase", {
            content_name: "visarthveda_foot_detox_patch",
            content_category: "detox_patch",
            value: 1.00,
            currency: "INR",
          });
        } catch (err) {
          console.error("Failed to track pixel Purchase event:", err);
        }

        try {
          const storedLeads = localStorage.getItem("VV_SUBMITTED_LEADS");
          const leadsMap = storedLeads ? JSON.parse(storedLeads) : {};
          leadsMap[phoneKey] = new Date().toISOString();
          localStorage.setItem("VV_SUBMITTED_LEADS", JSON.stringify(leadsMap));
        } catch (err) {
          console.warn("localStorage write failed:", err);
        }
      } else {
        setError(res.error || "Failed to submit. Please try again.");
      }
    } catch (err: any) {
      console.error("Submission error:", err);
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in" onClick={onClose}>
      <div className="bg-card rounded-3xl max-w-md w-full p-6 md:p-8 shadow-2xl relative animate-scale-in max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 h-9 w-9 rounded-full bg-muted hover:bg-border grid place-items-center">
          <X className="h-4 w-4" />
        </button>
        {submitted ? (
          <div className="text-center py-8">
            <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 text-primary grid place-items-center">
              <Check className="h-8 w-8" />
            </div>
            <h3 className="mt-4 font-display text-2xl font-medium">Thank You{form.name ? `, ${form.name.split(" ")[0]}` : ""}!</h3>
            <p className="mt-2 text-muted-foreground text-sm">Our representative will call you in a while.</p>
            <button onClick={onClose} className="btn-primary mt-6">Done</button>
          </div>
        ) : (
          <>
            <span className="eyebrow"><Package className="h-3.5 w-3.5" /> Book Your Order</span>
            <h3 className="mt-3 font-display text-2xl font-medium">Request a Callback</h3>
            <p className="text-sm text-muted-foreground mt-1">Fill in your details — our team will call you to confirm.</p>
            <form onSubmit={submit} className="mt-5 space-y-3">
              {error && (
                <div className="rounded-xl bg-destructive/10 p-3.5 text-sm font-medium text-destructive">
                  ⚠️ {error}
                </div>
              )}
              <Field label="Full Name" error={errors.name}>
                <input disabled={submitting} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} className="input" placeholder="Your full name" />
              </Field>
              <Field label="Contact Number" error={errors.contact}>
                <input disabled={submitting} value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value.replace(/\D/g, "").slice(0, 10) })} inputMode="numeric" className="input" placeholder="10-digit mobile number" />
              </Field>
              <Field label="City" error={errors.city}>
                <input disabled={submitting} value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} maxLength={100} className="input" placeholder="Your city" />
              </Field>
              <button type="submit" disabled={submitting} className="btn-primary w-full mt-2 flex items-center justify-center gap-2">
                {submitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Package className="h-4 w-4" /> Submit
                  </>
                )}
              </button>
              <p className="text-xs text-muted-foreground text-center">Our representative will call you shortly.</p>
            </form>
          </>
        )}
      </div>
      {showDuplicateModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in" onClick={() => setShowDuplicateModal(false)}>
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-xl text-center animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setShowDuplicateModal(false)} className="absolute right-4 top-4 text-muted-foreground hover:text-foreground text-lg">✕</button>
            <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
              <AlertTriangle className="h-8 w-8 animate-pulse" />
            </div>
            <h4 className="font-display text-xl font-bold text-foreground">Already Submitted</h4>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              You already submitted the form — please wait 24 hours, our representative will call you shortly.
            </p>
            <button type="button" onClick={() => setShowDuplicateModal(false)} className="mt-6 w-full rounded-xl btn-primary py-3 font-semibold text-primary-foreground transition">Close</button>
          </div>
        </div>
      )}
      <style>{`.input{width:100%;padding:0.7rem 0.9rem;border-radius:0.75rem;border:1px solid var(--border);background:var(--background);font-size:0.95rem;outline:none;transition:border-color .2s, box-shadow .2s}.input:focus{border-color:var(--primary);box-shadow:0 0 0 3px color-mix(in oklab,var(--primary) 20%,transparent)}`}</style>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <div className="mt-1">{children}</div>
      {error && <span className="text-xs text-destructive mt-1 block">{error}</span>}
    </label>
  );
}

