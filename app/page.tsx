// import BestOffertwo from "./component/BestOffertwo";
import BestsellersSection from "./component/BestSellerSection";
import Features from "./component/Features";
import HomePage from "./component/Home/HomePage";
import HomeSlider from "./component/Home/HomeSlider";
import OfferSection from "./component/OfferSection";


export default function Home() {
  return (
    <div className="">
      <HomeSlider />
      <Features />
      <OfferSection />
      <BestsellersSection />
      {/* <BestOffertwo /> */}
      <HomePage />

    </div>
  );
}
