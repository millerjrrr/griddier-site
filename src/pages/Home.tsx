import FAQs from "../components/HomePageComponents/FAQs";
import InformationBanner from "../components/HomePageComponents/InformationBanner";
import OpenBanner from "../components/HomePageComponents/OpenBanner";
import ReadyToLevelUpBanner from "../components/HomePageComponents/ReadyToLevelUpBanner";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-center">
      <OpenBanner />
      <InformationBanner />
      <ReadyToLevelUpBanner />
      <FAQs />
    </div>
  );
}
