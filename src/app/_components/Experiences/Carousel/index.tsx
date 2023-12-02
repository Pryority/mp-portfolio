"use client";

import { urlFor } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import type { Experience } from "../../../../../typings";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
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

interface Props {
  experiences: Experience[];
}

export default function Carousel({ experiences }: Props) {
  const [active, setActive] = useState(0);
  return (
    <section className="flex flex-col items-center justify-center">
      <button
        disabled={active === 0 ? true : false}
        className={`group absolute left-8 ${
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
          className="absolute text-primary opacity-80"
        />

        <div
          className={`h-[128px] w-[128px] rounded-full border-2 border-primary/20 bg-[#1e1e1e]/80 ${
            active === 0 ? "" : "group-hover:bg-[#1e1e1e]"
          }`}
        />
      </button>
      <div className="grid h-full grid-cols-1 items-center justify-center gap-2 2xl:max-w-6xl">
        {experiences.map((exp, i) => (
          <Card
            key={i}
            className={`2xl:min-w-[720px] ${
              i === active ? "relative  opacity-100" : "hidden"
            }`}
          >
            <CardHeader>
              <CardTitle>{exp.company}</CardTitle>
              <CardDescription>{exp.jobTitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className={`group relative  h-32 w-32 items-center justify-center overflow-clip rounded-md transition-all md:h-56 md:w-56 2xl:h-[512px] 2xl:w-full`}
              >
                <Image
                  src={urlFor(exp.companyImage.asset._ref).url()}
                  fill
                  alt={""}
                  className="rounded-md object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger>View Key Learnings</DialogTrigger>
                <DialogContent className="2xl:max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="2xl:text-5xl">
                      {exp.company} Key Learnings
                    </DialogTitle>
                    <DialogDescription className="pt-8 2xl:text-xl">
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
        className={`group absolute right-8 ${
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
          className="absolute text-primary opacity-80 "
        />

        <div
          className={`h-[128px] w-[128px] rounded-full border-2 border-primary/20 bg-[#1e1e1e]/80 ${
            active === experiences.length - 1 ? "" : "group-hover:bg-[#1e1e1e]"
          }`}
        />
      </button>
    </section>
  );
}
