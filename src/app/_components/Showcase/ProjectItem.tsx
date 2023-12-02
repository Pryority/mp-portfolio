"use client";

// import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
// import Link from "next/link";
// import Draggable from "react-draggable";
import type { Project } from "@/../typings";

import {
  Card,
  CardContentNoPadding,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { urlFor } from "@/lib/utils";

interface ProjectItemProps {
  project: Project | null;
}

export default function ProjectItem({ project }: ProjectItemProps) {
  return (
    //<Draggable axis="x" bounds="parent">
    <Card className="flex h-[320px] w-[384px] flex-col">
      <CardHeader>
        <CardTitle>{project?.title}</CardTitle>
        {/* <CardDescription>{project?}</CardDescription> */}
      </CardHeader>
      <CardContentNoPadding className="relative flex h-full w-full">
        <div id="project" className="relative h-full w-full rounded-md">
          {project ? (
            <Image
              src={urlFor(project.demoImage.asset._ref).url()}
              alt=""
              className="rounded-sm object-contain"
              fill
              sizes="100vw"
            />
          ) : (
            <div>Could not load project</div>
          )}
        </div>
      </CardContentNoPadding>
      <CardFooter>{/* <p>Card Footer</p> */}</CardFooter>
    </Card>
  );
}
