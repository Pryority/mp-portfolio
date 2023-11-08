import React from "react";
import { ThemeToggle } from "../ui/theme-toggle";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative z-0 flex w-screen flex-col items-center justify-center overflow-visible text-left md:min-h-[80vh] md:flex-row">
      <div className="absolute top-0 z-0 flex h-2/3 w-full overflow-clip">
        <Image
          src={"/Matt-japan-mountain.jpg"}
          alt=""
          className="object-cover"
          fill
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-background/10 to-background/5" />
      </div>
      <div className="absolute top-0 z-50 h-fit w-full max-w-full flex-col items-center justify-center overflow-visible text-left md:flex-row">
        <header className="z-50 flex w-full items-center p-8 md:justify-between md:px-16 md:py-8">
          <div className="flex flex-col items-center text-center">
            <p className="whitespace-nowrap font-extrabold tracking-tight text-slate-900 sm:text-[5rem] md:text-5xl">
              Matthew
              <span className="bg-gradient-to-tr from-lime-600  to-slate-400 bg-clip-text text-transparent">
                {" "}
                Pryor
              </span>
            </p>
            <p className="whitespace-nowrap pl-2 uppercase tracking-[16px] text-slate-500">
              Web Developer
            </p>
          </div>
          <div className="flex w-full justify-end gap-4">
            <Button variant={"outline"}>Login</Button>
            <ThemeToggle />
          </div>
        </header>
      </div>
      <div className="absolute left-0 top-1/4 flex h-fit w-full items-center justify-start gap-12 md:px-16">
        <div className="flex w-1/2 flex-col gap-8 md:gap-16">
          <div className="flex h-fit w-full flex-col gap-8">
            <h1 className="text-center text-6xl font-medium tracking-tight text-slate-900 md:text-left">
              Crafting Digital Experiences That Inspire, Engage, and Delight
            </h1>
            <h2 className="text-center text-2xl tracking-tighter text-[#1e1e1e] md:text-left">
              Transforming Ideas into Seamless, User-Centric Web Solutions
            </h2>
            <div className="flex w-1/2 items-center gap-4">
              <Button
                className="flex w-full justify-center"
                variant={"secondary"}
              >
                Learn More
              </Button>
              <Button
                className="flex w-full justify-center"
                variant={"default"}
              >
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
