"use client";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import Draggable from "react-draggable";
import type { Project } from "@/../typings";
import client from "@/sanity/sanity.client";
import imageUrlBuilder from "@sanity/image-url";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface ProjectItemProps {
  project: Project | null;
}
function urlFor(source: string) {
  return imageUrlBuilder(client).auto("format").image(source);
}
export default function ProjectItem({ project }: ProjectItemProps) {
  const PROJECT_URL = project?.link ?? "";
  return (
    //<Draggable axis="x" bounds="parent">
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
    // <article className="relative flex h-80 justify-center md:w-[512px] lg:h-[448px] lg:w-[640px] 2xl:h-[512px] 2xl:w-[640px]">
    //   <div id="project" className="relative h-full w-screen rounded-md">
    //     {project ? (
    //       <Image
    //         src={urlFor(project.demoImage.asset._ref).url()}
    //         alt=""
    //         className="rounded-sm object-cover"
    //         fill
    //         sizes="100vw"
    //       />
    //     ) : (
    //       <div>Could not load project</div>
    //     )}
    //   </div>
    //   <Link
    //     href={PROJECT_URL}
    //     className="group absolute bottom-0 flex items-center gap-2 rounded-[2px] border border-lime-900 bg-primary/90 px-4 py-2 text-amber-800 backdrop-blur-xl hover:text-amber-700 dark:text-amber-500 dark:hover:text-amber-400"
    //   >
    //     <p className="">{project?.title}</p>
    //     <ArrowTopRightOnSquareIcon className="h-5 w-5 -translate-y-[1px]" />
    //   </Link>
    // </article>
    // </Draggable>
  );
}
