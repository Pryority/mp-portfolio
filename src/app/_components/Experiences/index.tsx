import React from "react";
import type { Experience } from "@/../typings";
import { getExperiences } from "@/sanity/sanity.query";
import Carousel from "./Carousel";

export default async function Experiences() {
  const experiences: Experience[] = await getExperiences();
  return (
    <div className="relative z-0 mt-64 flex h-full w-full flex-col items-start justify-center gap-16 bg-gradient-to-b from-cyan-900/20 to-transparent pb-40 text-left sm:items-center 2xl:top-0 2xl:min-h-screen">
      <h4 className="text-center text-3xl font-medium tracking-[-0.5rem] text-orange-700 dark:text-orange-300 sm:text-4xl md:text-left 2xl:text-8xl">
        Job History
      </h4>
      <Carousel experiences={experiences} />
    </div>
  );
}
