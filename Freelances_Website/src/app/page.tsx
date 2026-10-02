import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { ToolsMarquee } from "@/components/site/tools-marquee";
import { Services } from "@/components/site/services";
import { Workflow } from "@/components/site/workflow";
import { Platforms } from "@/components/site/platforms";
import { Deliverables } from "@/components/site/deliverables";
import { WhyUs } from "@/components/site/why-us";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Workflow />
        <ToolsMarquee />
        <Platforms />
        <Deliverables />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
