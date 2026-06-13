"use client";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const SPONSORS = [
  { src: "/Solidworks.png", name: "SolidWorks" },
  { src: "/anys.png", name: "Ansys" },
  { src: "/altium.png", name: "Altium" },
  { src: "/protoworks.png", name: "Protoworks" },
];

const COMPETITIONS = [
  { src: "/spros.png", name: "SPROS" },
  { src: "/cognizance.png", name: "Cognizance" },
  { src: "/Aerothon.png", name: "Aerothon" },
  { src: "/techfest.png", name: "Techfest" },
  { src: "/IROC.png", name: "IROC" },
];

export default function CompsAndSpons() {
  // duplicate each list for seamless infinite marquees
  const sponsorRow = [...SPONSORS, ...SPONSORS];
  const compRow = [...COMPETITIONS, ...COMPETITIONS];

  return (
    <section className="relative w-full bg-black py-[120px] overflow-hidden">
      <div className="absolute inset-0 aurora-soft" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        {/* ===== SPONSORS ===== */}
        <Reveal from="up" className="text-center">
          <h3 className="font-space uppercase tracking-[0.2em] text-[var(--text-secondary)] text-sm">
            Our Sponsors &amp; Partners
          </h3>
        </Reveal>

        <div className="mt-10 relative overflow-hidden">
          {/* edge fades */}
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
            style={{ background: "linear-gradient(90deg, #000, transparent)" }}
          />
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
            style={{ background: "linear-gradient(270deg, #000, transparent)" }}
          />

          <div className="flex w-max animate-marquee">
            {sponsorRow.map((s, i) => (
              <div
                key={`${s.name}-${i}`}
                className="glass mx-5 px-12 py-7 flex items-center justify-center shrink-0"
                style={{ borderRadius: "9999px" }}
              >
                <Image
                  src={s.src}
                  alt={s.name}
                  width={220}
                  height={80}
                  className="h-16 md:h-20 w-auto object-contain grayscale brightness-150 hover:grayscale-0 hover:brightness-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ===== COMPETITIONS (reverse-scrolling marquee) ===== */}
        <Reveal from="up" className="text-center mt-24">
          <h3 className="font-space uppercase tracking-[0.2em] text-[var(--text-secondary)] text-sm">
            Competitions We&apos;ve Flown
          </h3>
        </Reveal>

        <div className="mt-12 relative overflow-hidden">
          {/* edge fades */}
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
            style={{ background: "linear-gradient(90deg, #000, transparent)" }}
          />
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
            style={{ background: "linear-gradient(270deg, #000, transparent)" }}
          />

          <div className="flex w-max animate-marquee" style={{ animationDirection: "reverse" }}>
            {compRow.map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="glass glass-hover group w-56 md:w-64 mx-4 shrink-0 h-48 md:h-52 flex flex-col items-center justify-center gap-4 p-6"
              >
                <Image
                  src={c.src}
                  alt={c.name}
                  width={180}
                  height={100}
                  className="h-20 md:h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <span className="font-space text-sm uppercase tracking-[0.12em] text-[var(--text-secondary)]">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
