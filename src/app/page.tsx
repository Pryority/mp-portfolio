import Hero from "./_components/Hero";
import GTKM from "./_components/GTKM";
import Showcase from "./_components/Showcase";
import WhyChooseMe from "./_components/WhyChooseMe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-x-hidden bg-secondary">
      <Hero />
      <GTKM />
      <Showcase />
      <WhyChooseMe />
    </main>
  );
}
