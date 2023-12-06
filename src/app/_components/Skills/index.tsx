import React from "react";
import type { Skill } from "@/../typings";
import { getSkills } from "@/sanity/sanity.query";
import Image from "next/image";
import { urlFor } from "@/lib/utils";

export default async function Skills() {
  const skills: Skill[] = await getSkills();
  return (
    <div className="relative z-0 mt-64 flex min-h-screen w-full flex-col items-center justify-center gap-16 bg-gradient-to-t from-cyan-900/20 to-transparent pb-40 text-left sm:items-center 2xl:top-0">
      <h4 className="title-text text-center text-cyan-700 dark:text-cyan-300">
        Skills
      </h4>
      <div className="xs:max-w-lg flex h-full grid-cols-2 flex-wrap items-center justify-center gap-2 sm:max-w-xl md:max-w-3xl 2xl:max-w-3xl">
        {skills.map((skill, i) => (
          <div
            key={i}
            className={`group relative h-32 w-32 items-center justify-center overflow-clip rounded-full transition-all md:h-40 md:w-40`}
          >
            <Image
              src={urlFor(skill.image.asset._ref).url()}
              fill
              alt={""}
              className="rounded-full transition-all duration-500 group-hover:scale-105"
            />
            <div className="duration-50 relative flex h-full w-full items-center justify-center rounded-full bg-primary-foreground/80 opacity-0 blur-md backdrop-blur-sm ease-in-out group-hover:opacity-100 group-hover:blur-none">
              <p className="translate-x-1 text-5xl font-bold tracking-tighter text-primary">
                {skill.progress}
                <span className="ml-1 text-3xl">%</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
