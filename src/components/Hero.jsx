"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  const droneControls = useAnimation();

  useEffect(() => {
    droneControls
      .start({
        y: -10,
        opacity: 1,
        transition: { duration: 1.2, ease: "easeOut" },
      })
      .then(() => {
        droneControls.start({
          y: [-10, -20, -10],
          transition: { duration: 4, ease: "easeInOut", repeat: Infinity },
        });
      });
  }, [droneControls]);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden">

      {/* ─── Content Cluster ─── */}
      <div
        className="
          relative flex items-center justify-center
          h-[22rem] w-full
          sm:h-[24rem]
          md:h-[26.25rem]
          -mt-[8vh] sm:-mt-[5vh] md:mt-0
        "
      >
        {/* Blue Circle */}
        <motion.div
          className="
            absolute inset-0 m-auto rounded-full bg-[#061045]
            h-[22rem] w-[22rem]
            sm:h-[24rem] sm:w-[24rem]
            md:h-[26.25rem] md:w-[26.25rem]
          "
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        />

        {/* Title */}
        <motion.h1
          className="
            relative z-10 font-anton text-white text-center
            text-[clamp(2.5rem,17vw,17rem)]
            tracking-wide sm:tracking-wider md:tracking-widest
          "
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          TEAM ARDRA
        </motion.h1>

        {/* Drone */}
        <motion.img
          src="/drone.png"
          alt="Drone"
          className="
            absolute inset-0 m-auto z-20
            w-[18rem] sm:w-[20rem] md:w-[26.25rem]
          "
          initial={{ y: 150, opacity: 0 }}
          animate={droneControls}
        />
      </div>

      {/* YELLOW RIBBON */}
      <div
        className="
          absolute z-30 top-[8%] left-[-10%]
          w-[200%] rotate-[-8deg]
          bg-[#f8f8e3] py-1.5 md:py-2
        "
      >
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-8 md:gap-12 whitespace-nowrap w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 14, ease: "linear", repeat: Infinity }}
          >
            {[...Array(2)].map((_, i) => (
              <span key={i} className="flex gap-8 md:gap-12">
                {[...Array(3)].map((_, j) => (
                  <span key={j} className="font-nico text-base md:text-2xl text-black tracking-[0.2em] md:tracking-[0.3em] uppercase">
                    Throttling Towards Excellence
                  </span>
                ))}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* BLUE RIBBON */}
      <div
        className="
          absolute z-30
          top-[58%] sm:top-[62%] md:top-[65%]
          left-[-10%] w-[200%] rotate-[-8deg]
          bg-[#04115a] py-1.5 md:py-2
        "
      >
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-8 md:gap-12 whitespace-nowrap w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 16, ease: "linear", repeat: Infinity }}
          >
            {[...Array(2)].map((_, i) => (
              <span key={i} className="flex gap-8 md:gap-12">
                {[...Array(3)].map((_, j) => (
                  <span key={j} className="font-nico text-base md:text-2xl text-amber-100 tracking-[0.2em] md:tracking-[0.3em] uppercase">
                    Throttling Towards Excellence
                  </span>
                ))}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}