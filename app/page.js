"use client"
import React from "react";
import AvailabilityBadge from "./_components/AvailabilityBadge";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Lenis from "lenis";
import Loader from "./_components/Loader";
import { useStore } from "./_store/useStore";

export default function Home() {
  const { isLoading } = useStore();

  React.useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    if (isLoading) {
      lenis.stop();
    } else {
      lenis.start();
    }

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <>
      <Loader />
      <div id="main-content-wrapper" className="relative w-full min-h-screen overflow-hidden bg-black top-0">
        <div id="main-content" className="relative w-full min-h-screen origin-center top-0 flex flex-col">
          <main className="bg-[#EDF1EC] overflow-hidden min-h-screen flex flex-col">
            <AvailabilityBadge />
            <Navbar />
            <Hero />
          </main>
        </div>
      </div>
    </>
  );
}
