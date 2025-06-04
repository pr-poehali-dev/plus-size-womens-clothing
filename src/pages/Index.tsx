import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import BrandSection from "@/components/BrandSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <ProductGrid />
      <BrandSection />
      <Footer />
    </div>
  );
};

export default Index;
