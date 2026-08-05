import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import EarningModel from "@/components/EarningModel";
import CatalogPreview from "@/components/CatalogPreview";
import FeaturesList from "@/components/FeaturesList";
import ReferralSection from "@/components/ReferralSection";
import WithdrawalProof from "@/components/WithdrawalProof";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <EarningModel />
      <CatalogPreview />
      <FeaturesList />
      <ReferralSection />
      <WithdrawalProof />
      <FAQ />
      <Footer />
    </main>
  );
}
