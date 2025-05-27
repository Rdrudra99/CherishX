import Chat from "@/components/chat";
import ContentSection from "@/components/content-one";
import FeaturesSection from "@/components/features-ten";
import { HeroHeader } from "@/components/Header";
import HeroSection from "@/components/hero-section-five";
import Integrations from "@/components/integrations-two";
import React from "react";

const Page = () => {
  return (
    <>
      <HeroHeader />
      <HeroSection />
      <ContentSection />
      {/* <Integrations /> */}
      <FeaturesSection />
    </>
  );
};

export default Page;
