import React from "react";
import Image from "next/image";
import type { Social } from "typings";
import { SocialIcon } from "react-social-icons";
import { getSocials } from "~/sanity/sanity.query";

export default async function GTKM() {
  const socials: Social[] = await getSocials();
  return (
    <div className="relative z-30 flex h-[768px] w-full flex-col items-center justify-center overflow-visible  bg-secondary text-left sm:z-20 sm:h-[600px] sm:min-h-[80vh] md:flex-row 2xl:min-h-[32vh]">
      <div className="absolute top-1/2 flex w-full max-w-7xl -translate-y-1/2 flex-col items-center justify-around gap-8 pb-24 pt-16 sm:top-80 md:flex-row md:gap-16 2xl:top-8">
        <div className="relative top-4 z-0 flex h-40 w-40 2xl:h-[1024px] 2xl:w-[1024px]">
          <Image
            src={"/headshot-no-bg.png"}
            alt=""
            className="object-contain "
            fill
          />
        </div>
        <div className="z-40 flex h-full w-full flex-col items-center  gap-8">
          <h3 className="text-center text-4xl font-medium tracking-tight text-lime-700 dark:text-lime-300 md:text-left">
            Getting to Know Me
          </h3>
          <p className="w-5/6 text-left tracking-wide text-primary-foreground sm:w-3/5 md:text-left 2xl:text-xl">
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
          {/* <div className="flex w-1/2 items-center gap-4">
            <Button
              className="flex w-full justify-center"
              variant={"secondary"}
            >
              Learn More
            </Button>
            <Button className="flex w-full justify-center" variant={"default"}>
              Start a Project
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
