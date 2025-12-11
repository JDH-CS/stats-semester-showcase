import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ContentSections } from "@/components/home/ContentSections";
import { StatsSection } from "@/components/home/StatsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <ContentSections />
    </Layout>
  );
};

export default Index;
