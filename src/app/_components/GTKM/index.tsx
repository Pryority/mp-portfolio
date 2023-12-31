import React from "react";
import Image from "next/image";
import type { Social } from "@/../typings";
import { SocialIcon } from "react-social-icons";
import { getSocials } from "@/sanity/sanity.query";

export default async function GTKM() {
  const socials: Social[] = await getSocials();
  return (
    <div className="relative z-30 flex h-[768px] w-full flex-col items-center justify-center overflow-visible bg-secondary text-left sm:z-20 sm:max-md:h-[600px] md:flex-row 2xl:min-h-[512px]">
      <div className="absolute top-1/2 flex w-full max-w-7xl -translate-y-1/2 flex-col items-center  justify-around gap-8 pb-24 pt-16 sm:top-80 md:grid md:grid-cols-3 md:px-8 md:pb-0 lg:w-5/6 lg:gap-8 lg:px-0 xl:w-4/5 2xl:top-1/2">
        <div className="relative top-4 z-0 flex h-40 w-40 items-center justify-center md:top-0 md:h-64 md:w-64 md:-translate-y-8 md:flex-col md:gap-4 xl:h-80 xl:w-80">
          <Image
            src={"/headshot-no-bg.png"}
            alt=""
            className="object-contain drop-shadow-lg"
            fill
            sizes="100vw"
          />
          <div className="social-icons absolute -bottom-10 hidden items-center md:flex lg:-bottom-12">
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
        <div className="z-40 col-span-2 flex h-full w-full flex-col items-center gap-8 md:items-start md:pl-8 lg:justify-center lg:pl-0">
          <h3 className="text-center font-medium tracking-tighter text-lime-700 dark:text-lime-400 sm:text-4xl 2xl:text-8xl">
            Getting to Know Me
          </h3>
          <p className="max-w-[256px] text-left tracking-wide text-primary-foreground sm:max-w-[320px] md:w-full md:max-w-md md:text-left md:text-lg lg:max-w-lg lg:text-xl xl:w-5/6 xl:max-w-xl 2xl:w-full 2xl:max-w-6xl 2xl:text-2xl 2xl:leading-[40px]">
            {`Welcome to the creative hub where passion meets expertise. I'm
            Matthew Pryor, a dedicated web developer and digital enthusiast with
            a mission to bring innovative ideas to life. With a keen eye for
            design and a love for clean, efficient code, I craft digital
            experiences that leave a lasting impression.`}
          </p>
          <div className="social-icons flex items-center md:hidden">
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
