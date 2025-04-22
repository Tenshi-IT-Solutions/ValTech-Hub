import Cta from "./_components/cta";
import Features from "./_components/features";
import Footer from "./_components/footer";
import Hero from "./_components/Hero";
import HowItWorks from "./_components/How-It-Works";
import Navbar from "./_components/navbar";
import Pricing from "./_components/pricing";
import Testimonials from "./_components/testimonials";
import YoutubeIntegration from "./_components/youtube-integration";


export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <YoutubeIntegration />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <Cta />
      <Footer />
    </main>
  );
}