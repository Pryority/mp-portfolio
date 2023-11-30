import React from "react";
import { Button } from "@/app/_components/ui/button";
import Image from "next/image";
import Navbar from "@/app/_components/Navbar";

export default function Hero() {
  return (
    <div className="relative z-0 flex h-[512px] w-full flex-col items-center justify-center overflow-visible bg-secondary text-left sm:h-[340px] md:h-[512px] md:flex-row lg:h-[640px]">
      <div className="absolute top-0 z-0 flex h-full w-full overflow-clip ">
        <Image
          src={"/Matt-japan-mountain.jpg"}
          alt=""
          className="object-cover"
          fill
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-secondary via-secondary/50 to-secondary/5 md:hidden" />
        <div className="absolute inset-0 z-0 hidden bg-gradient-to-t from-secondary via-secondary/10 to-secondary/5 md:flex" />
      </div>
      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-start">
        <Navbar />
        <div className="flex h-full w-full flex-col items-start justify-center gap-8 px-8 pb-24 sm:pb-8 md:gap-16 md:pb-40 md:pt-16 lg:max-w-6xl lg:pt-0 2xl:pt-16">
          <div className="flex h-full flex-col justify-center gap-4 sm:w-4/5 md:w-full lg:w-full">
            <h1 className="text-left text-3xl font-medium leading-8 tracking-tighter text-[#9c9c9c]/50 dark:text-secondary/30 min-[414px]:w-3/5 md:text-left md:text-6xl lg:text-7xl 2xl:text-8xl ">
              Crafting Digital Experiences
            </h1>
            <h2 className="w-3/4 text-left text-sm tracking-wide text-[#767676]/50 min-[414px]:w-[60%] md:w-1/2 md:text-left md:text-xl min-[896px]:w-[1/3] lg:w-2/5 2xl:text-2xl">
              Transforming Ideas into Seamless, User-Centric Web Solutions
            </h2>
          </div>
          <div className="flex w-full items-center justify-center gap-4 lg:justify-start">
            <Button
              className="flex w-[200px] justify-center"
              variant={"secondary"}
            >
              Learn More
            </Button>
            <Button
              className="flex w-[200px] justify-center"
              variant={"default"}
            >
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
