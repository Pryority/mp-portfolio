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
        className={`group absolute bottom-8 left-8 sm:bottom-[50vh] sm:translate-y-8 ${
          active === 0 ? "disabled opacity-25" : ""
        }`}
      >
        <ArrowLeftCircle
          size={128}
          onClick={() => {
            if (active === 0) {
              return;
            }
            setActive((prev) => prev - 1);
          }}
          className="hidden text-primary opacity-80 md:absolute md:bottom-8"
        />
        <ArrowLeftCircle
          size={64}
          onClick={() => {
            if (active === 0) {
              return;
            }
            setActive((prev) => prev - 1);
          }}
          className="absolute text-primary opacity-80"
        />

        <div
          className={`h-[64px] w-[64px] rounded-full border-2 border-primary/20 bg-[#1e1e1e]/80 md:h-[128px] md:w-[128px] ${
            active === 0 ? "" : "group-hover:bg-[#1e1e1e]"
          }`}
        />
      </button>
      <div className="grid h-full grid-cols-1 items-center justify-center gap-2 2xl:max-w-6xl">
        {experiences.map((exp, i) => (
          <Card
            key={i}
            className={`flex min-h-[344px] w-[80vw] flex-col justify-between sm:min-h-[300px] sm:max-w-sm 2xl:min-w-[720px] ${
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
                className={`group absolute inset-0 h-[128px] w-full -translate-y-8 items-center justify-center overflow-clip rounded-md border transition-all md:h-56 md:w-56 2xl:h-[512px] 2xl:w-full`}
              >
                <Image
                  src={urlFor(exp.companyImage.asset._ref).url()}
                  fill
                  alt={""}
                  className="rounded-md object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <Dialog>
                <Button variant={"secondary"}>
                  <DialogTrigger className="flex items-center gap-2">
                    Key Learnings <EyeIcon size={20} />
                  </DialogTrigger>
                </Button>
                <DialogContent className="2xl:max-w-2xl">
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
        className={`group absolute bottom-8 right-8 sm:bottom-[50vh] sm:translate-y-8  ${
          active === experiences.length - 1 ? "opacity-25" : ""
        }`}
      >
        <ArrowRightCircle
          size={128}
          onClick={() => {
            if (active === experiences.length - 1) {
              return;
            }
            setActive((prev) => prev + 1);
          }}
          className="hidden text-primary opacity-80 md:absolute md:bottom-8"
        />
        <ArrowRightCircle
          size={64}
          onClick={() => {
            if (active === experiences.length - 1) {
              return;
            }
            setActive((prev) => prev + 1);
          }}
          className="absolute text-primary opacity-80"
        />

        <div
          className={`h-[64px] w-[64px] rounded-full border-2 border-primary/20 bg-[#1e1e1e]/80 md:h-[128px] md:w-[128px] ${
            active === experiences.length - 1 ? "" : "group-hover:bg-[#1e1e1e]"
          }`}
        />
      </button>
    </section>
  );
}
