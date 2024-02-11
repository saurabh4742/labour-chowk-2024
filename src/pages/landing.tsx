import AdSenseComponent from "@/Adsense/Ads";
import LandingPageLoginCard from "./ui-boiler/LandingPageLoginCard";
function Landing() {
  return (
    <div  className="flex items-center justify-center min-h-screen overflow-auto">
      <AdSenseComponent/>
      <LandingPageLoginCard />
    </div>
  );
}
export default Landing;
