import FAQs from "../components/HomePageComponents/FAQs";
import InformationBanner from "../components/HomePageComponents/InformationBanner";
import OpenBanner from "../components/HomePageComponents/OpenBanner";
import ReadyToLevelUpBanner from "../components/HomePageComponents/ReadyToLevelUpBanner";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-center">
      <div className="h-[70px] md:h-0"></div>
      <OpenBanner />
      <InformationBanner />
      <ReadyToLevelUpBanner />
      <FAQs />
    </div>
  );
}
