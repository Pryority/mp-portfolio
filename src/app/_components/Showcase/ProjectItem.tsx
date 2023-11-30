"use client";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import Draggable from "react-draggable";
import type { Project } from "typings";
import client from "~/sanity/sanity.client";
import imageUrlBuilder from "@sanity/image-url";

interface ProjectItemProps {
  project: Project | null;
}
function urlFor(source: string) {
  return imageUrlBuilder(client).image(source);
}
export default function ProjectItem({ project }: ProjectItemProps) {
  const PROJECT_URL = project?.link ?? "";
  return (
    <Draggable axis="x" bounds="parent">
      <article className="relative flex h-80 w-[512px] justify-center p-4 2xl:w-[640px] ">
        <div
          id="project"
          className="relative h-full w-screen rounded-md shadow-md shadow-sky-900/40"
        >
          {project ? (
            <Image
              src={urlFor(project.demoImage.asset._ref).url()}
              alt=""
              className="rounded-sm object-cover"
              fill
              sizes="100vw"
            />
          ) : (
            <div>Could not load project</div>
          )}
        </div>
        <Link
          href={PROJECT_URL}
          className="group absolute bottom-2 flex items-center gap-4 rounded-[2px] border border-lime-900 bg-primary/90 px-4 py-2 text-amber-800 backdrop-blur-xl hover:text-amber-700 dark:text-amber-500 dark:hover:text-amber-400"
        >
          <p className="">{project?.title}</p>
          <ArrowTopRightOnSquareIcon className="h-5 w-5" />
        </Link>
      </article>
    </Draggable>
  );
}
