import React from "react";
import Image from "next/image";
import type { Social } from "@/../typings";
import { SocialIcon } from "react-social-icons";
import { getSocials } from "@/sanity/sanity.query";

export default async function GTKM() {
  const socials: Social[] = await getSocials();
  return (
    <div className="relative z-30 flex h-[768px] w-full flex-col items-center justify-center overflow-visible  bg-secondary text-left sm:z-20 sm:max-md:h-[600px] md:flex-row 2xl:min-h-[32vh]">
      <div className="absolute top-1/2 flex w-full max-w-7xl -translate-y-1/2 flex-col items-center justify-around gap-8 pb-24 pt-16 sm:top-80 md:grid md:grid-cols-3 md:px-8 md:pb-0 2xl:top-1/2">
        <div className="relative top-4 z-0 flex h-40 w-40 items-center justify-center md:top-0 md:h-full md:w-full">
          <Image
            src={"/headshot-no-bg.png"}
            alt=""
            className="object-contain"
            fill
          />
        </div>
        <div className="z-40 col-span-2 flex h-full w-full flex-col items-center gap-8 md:items-start">
          <h3 className="text-center text-4xl font-medium tracking-tight text-lime-700 dark:text-lime-300 md:text-left">
            Getting to Know Me
          </h3>
          <p className="w-5/6 text-left tracking-wide text-primary-foreground sm:w-3/5 md:w-full md:text-left 2xl:text-xl">
            {`Welcome to the creative hub where passion meets expertise. I'm
            Matthew Pryor, a dedicated web developer and digital enthusiast with
            a mission to bring innovative ideas to life. With a keen eye for
            design and a love for clean, efficient code, I craft digital
            experiences that leave a lasting impression.`}
          </p>
          <div className="social-icons flex items-center">
            {socials.map((social) => (
              <SocialIcon
                key={social._id}
                url={social.url}
                fgColor="gray"
                bgColor="transparent"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
