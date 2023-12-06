"use client";

import { urlFor } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import type { Experience } from "../../../../../typings";
import { ArrowLeftCircle, ArrowRightCircle, EyeIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { Button } from "../../ui/button";

interface Props {
  experiences: Experience[];
}

export default function Carousel({ experiences }: Props) {
  const [active, setActive] = useState(0);

  return (
    <section className="absolute inset-0 flex min-h-screen flex-col items-center justify-center">
      <button
        disabled={active === 0 ? true : false}
        className={`group absolute bottom-2 left-2 z-10 sm:bottom-[50vh] sm:left-4 sm:translate-y-8 md:bottom-8 md:left-8 lg:bottom-1/2 ${
          active === 0 ? "disabled opacity-25" : ""
        }`}
      >
        <ArrowLeftCircle
          size={80}
          onClick={() => {
            if (active === 0) {
              return;
            }
            setActive((prev) => prev - 1);
          }}
          className="absolute hidden text-primary opacity-80 md:flex"
        />
        <ArrowLeftCircle
          size={64}
          onClick={() => {
            if (active === 0) {
              return;
            }
            setActive((prev) => prev - 1);
          }}
          className="absolute hidden text-primary opacity-80 sm:flex md:hidden"
        />
        <ArrowLeftCircle
          size={56}
          onClick={() => {
            if (active === 0) {
              return;
            }
            setActive((prev) => prev - 1);
          }}
          className="absolute text-primary opacity-80 sm:hidden"
        />

        <div
          className={`h-[56px] w-[56px] rounded-full border-2 border-primary/20 bg-[#1e1e1e]/80 sm:h-[64px] sm:w-[64px] md:h-[80px] md:w-[80px] ${
            active === 0 ? "" : "group-hover:bg-[#1e1e1e]"
          }`}
        />
      </button>
      <div className="grid h-full grid-cols-1 items-center justify-center gap-2 2xl:max-w-6xl">
        {experiences.map((exp, i) => (
          <Card
            key={i}
            className={`flex min-h-[344px] w-[80vw] flex-col justify-between sm:min-h-[300px] sm:max-w-sm md:h-[60vh] lg:h-[70vh] 2xl:min-w-[720px] ${
              i === active ? "relative  opacity-100" : "hidden"
            }`}
          >
            <CardHeader className="w-[64vw] max-w-sm">
              <div className="absolute flex flex-col">
                <CardTitle>{exp.company}</CardTitle>
                <CardDescription className="max-w-[60vw]">
                  {exp.jobTitle}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="relative m-2 flex flex-col items-center">
              <div
                className={`group absolute h-[128px] w-full -translate-y-8 items-center justify-center overflow-clip rounded-md border transition-all md:h-[30vh] md:-translate-y-8 lg:h-[40vh] lg:-translate-y-20 2xl:h-[512px] 2xl:w-full`}
              >
                <Image
                  src={urlFor(exp.companyImage.asset._ref).url()}
                  fill
                  alt={""}
                  sizes="100vw"
                  className="rounded-md object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <Dialog>
                <div className="inline-flex h-10 items-center justify-center rounded-[10px] bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground ring-offset-background transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  <DialogTrigger className="flex items-center gap-2">
                    Key Learnings <EyeIcon size={20} />
                  </DialogTrigger>
                </div>

                <DialogContent className="scale-90 2xl:max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-left sm:text-center 2xl:text-5xl">
                      {exp.company} Key Learnings
                    </DialogTitle>
                    <DialogDescription className="pt-4 text-left sm:text-center 2xl:text-xl">
                      {exp.keyLearnings}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
      <button
        disabled={active === experiences.length - 1 ? true : false}
        className={`group absolute bottom-2 right-2 z-10 sm:bottom-[50vh] sm:right-4 sm:translate-y-8 md:bottom-8 md:right-8 lg:bottom-1/2 ${
          active === experiences.length - 1 ? "opacity-25" : ""
        }`}
      >
        <ArrowRightCircle
          size={80}
          onClick={() => {
            if (active === experiences.length - 1) {
              return;
            }
            setActive((prev) => prev + 1);
          }}
          className="absolute hidden text-primary opacity-80 md:flex"
        />
        <ArrowRightCircle
          size={64}
          onClick={() => {
            if (active === experiences.length - 1) {
              return;
            }
            setActive((prev) => prev + 1);
          }}
          className="absolute hidden text-primary opacity-80 sm:flex md:hidden"
        />
        <ArrowRightCircle
          size={56}
          onClick={() => {
            if (active === experiences.length - 1) {
              return;
            }
            setActive((prev) => prev + 1);
          }}
          className="absolute text-primary opacity-80 md:hidden"
        />

        <div
          className={`h-[56px] w-[56px] rounded-full border-2 border-primary/20 bg-[#1e1e1e]/80 sm:h-[64px] sm:w-[64px] md:h-[80px] md:w-[80px] ${
            active === experiences.length - 1 ? "" : "group-hover:bg-[#1e1e1e]"
          }`}
        />
      </button>
    </section>
  );
}
