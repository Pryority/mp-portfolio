import React from "react";
import Image from "next/image";

export default function Row2() {
  return (
    <div className="relative z-0 flex min-h-[20vh] w-screen flex-col items-center justify-center overflow-visible bg-inherit text-left md:flex-row">
      <div className="absolute top-0 flex w-full max-w-7xl -translate-y-1/2 items-center justify-around gap-8 md:gap-16">
        <div className="relative top-0 z-0 flex h-[1024px] w-[1024px]">
          <Image
            src={"/headshot-no-bg.png"}
            alt=""
            className="object-contain "
            fill
          />
        </div>
        <div className="flex h-fit w-full flex-col gap-8">
          <h3 className="text-center text-4xl font-medium tracking-tight text-lime-700 dark:text-lime-300 md:text-left">
            Getting to Know Me
          </h3>
          <p className="text-center text-xl tracking-wide text-primary-foreground md:text-left">
            {`Welcome to the creative hub where passion meets expertise. I'm
            Matthew Pryor, a dedicated web developer and digital enthusiast with
            a mission to bring innovative ideas to life. With a keen eye for
            design and a love for clean, efficient code, I craft digital
            experiences that leave a lasting impression.`}
          </p>
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
