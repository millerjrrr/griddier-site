import InformationBanner from "../components/InformationBanner";
import OpenBanner from "../components/OpenBanner";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-center">
      <OpenBanner />
      <InformationBanner />
    </div>
  );
}
