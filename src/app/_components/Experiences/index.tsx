import React from "react";
import type { Experience } from "@/../typings";
import { getExperiences } from "@/sanity/sanity.query";
import Carousel from "./Carousel";

export default async function Experiences() {
  const experiences: Experience[] = await getExperiences();
  return (
    <div className="relative z-0 flex h-full min-h-screen w-full flex-col items-center justify-center gap-16 bg-gradient-to-b from-cyan-900/20 to-transparent text-left">
      <div className="flex h-[80vh] flex-col">
        <h4 className="title-text text-center text-orange-700 dark:text-orange-300 sm:bottom-1/4 sm:left-2 sm:max-md:absolute">
          Jobs
        </h4>
        <Carousel experiences={experiences} />
      </div>
    </div>
  );
}
