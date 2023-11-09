import React from "react";
import { ThemeToggle } from "../ui/theme-toggle";
import { Button } from "../ui/button";
import Image from "next/image";
import Navbar from "../Navbar";

export default function Hero() {
  return (
    <div className="relative z-0 flex h-[340px] w-full flex-col items-center justify-center overflow-visible  bg-secondary text-left md:min-h-[80vh] md:flex-row">
      <div className="absolute top-0 z-0 flex h-full w-full overflow-clip ">
        <Image
          src={"/Matt-japan-mountain.jpg"}
          alt=""
          className="object-cover"
          fill
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-secondary via-secondary/50 to-secondary/5 md:hidden" />
        <div className="inset-0 z-0 hidden bg-gradient-to-t from-secondary via-secondary/10 to-secondary/5 md:absolute" />
      </div>
      <div className="0 absolute left-0 top-0 flex h-full w-full flex-col items-center justify-start md:px-16">
        <Navbar />
        <div className="grid h-full w-full grid-cols-1 items-center justify-center gap-8 px-2 md:w-1/2 md:gap-16">
          <div className="flex h-full flex-col justify-center gap-4">
            <h1 className="text-left text-3xl font-medium leading-8 tracking-tighter text-secondary md:text-left 2xl:text-6xl">
              Crafting Digital Experiences
            </h1>
            {/* <h1 className="text-left text-base font-medium tracking-tight text-slate-900 md:text-left 2xl:text-6xl">
              Crafting Digital Experiences That Inspire, Engage, and Delight
            </h1> */}
            <h2 className="w-3/4 text-left text-sm tracking-wide text-primary-foreground sm:w-1/2 md:text-left md:text-primary 2xl:text-2xl">
              Transforming Ideas into Seamless, User-Centric Web Solutions
            </h2>
          </div>
          <div className="flex w-full items-center justify-center gap-4 px-8">
            <Button
              className="flex w-full justify-center"
              variant={"secondary"}
            >
              Learn More
            </Button>
            <Button className="flex w-full justify-center" variant={"default"}>
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
