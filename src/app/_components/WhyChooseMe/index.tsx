export default function WhyChooseMe() {
  return (
    <div className="relative z-0 flex h-[1024px] w-full flex-col items-center justify-center bg-secondary text-left sm:h-[680px] md:flex-row 2xl:top-0 2xl:min-h-[40vh]">
      {/* <div className="absolute inset-0 top-0 z-0 h-[500px] -translate-y-80 bg-gray-800" /> */}
      <div className="grid w-5/6 items-center justify-center gap-8 pt-80 sm:max-w-xl sm:pt-40 md:gap-16">
        <h4 className="text-center text-4xl font-medium tracking-tight  text-lime-300 dark:text-lime-400  md:text-left">
          Why Choose Me
        </h4>
        <p className="w-full text-left text-base tracking-wide text-primary-foreground md:text-left 2xl:text-xl">
          As a passionate and innovative software developer, I offer:
          <br />
          ✓ Expertise in transforming ideas into seamless, intuitive, and
          visually appealing web applications.
          <br />
          ✓ Strong problem-solving skills and adaptability to embrace new
          challenges and technologies.
          <br />
          ✓ Collaborative spirit, thriving in team environments and uplifting
          team morale.
          <br />
          {`Choose me for your software development needs, and let's create
            outstanding digital experiences together.`}
        </p>
      </div>
    </div>
  );
}
