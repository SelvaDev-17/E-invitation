import { Hero } from "@/components/sections/Hero";
import { Invitation } from "@/components/sections/Invitation";
import { Countdown } from "@/components/sections/Countdown";
import { Story } from "@/components/sections/Story";
import { Events } from "@/components/sections/Events";
import { Venue } from "@/components/sections/Venue";
import { Gallery } from "@/components/sections/Gallery";
import { ThankYou } from "@/components/sections/ThankYou";
import { ParallaxBackground } from "@/components/ui/ParallaxBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent selection:bg-luxury-gold selection:text-white relative">
      <ParallaxBackground />
      <Hero />
      <Invitation />
      <Countdown />
      <Story />
      <Events />
      <Venue />
      <Gallery />
      <ThankYou />
    </main>
  );
}
