import HaveToSay from "@/components/HaveToSay";
import Hero from "@/components/Hero";
import OnlineConvenient from "@/components/OnlineConvenient";
import Product from "@/components/Product";
import SolutionsHealth from "@/components/SolutionsHealth";
import Footer from "@/components/Footer";

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <div
        className="bg-[url('../images/bg-artwork.png')]
        bg-cover
        bg-top
        bg-repeat-y"
      >
        <Product />
        <SolutionsHealth />
      <OnlineConvenient />
      <HaveToSay />
      </div>
      <Footer />
      {/* <div
        className="bg-[url('../images/bg-artwork.png')]
        bg-cover
        bg-top
        bg-repeat-y"
      >

      </div> */}
    </div>
  );
}

export default Home;
