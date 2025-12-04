import siteContent from "../../assets/siteContent";
import BadgeContainer from "../BadgeContainer";
import RPhone from "../RPhone";

const OpenBanner = () => {
  const { title, subTitle, tagLine } = siteContent.home.openingBanner;

  return (
    <div className="flex w-full flex-1 items-center justify-center">
      <div className="inner-container opening-banner">
        <div className="block inline-block flex animate-pulseScale justify-center">
          <img className="app-icon" src="app-icon.png" />
          <h1 className="">{title}</h1>
          <p className="pb-4 font-bold">{subTitle}</p>
          <p className="pb-1 font-bold md:text-xl">{tagLine}</p>
          <BadgeContainer />
        </div>
        <div className="flex items-center justify-center">
          {/* <div className="absolute z-0 h-[600px] w-[600px] rounded-full bg-TERTIARY opacity-40 blur-[120px]"></div> */}
          <RPhone name="iPhone" />
        </div>
      </div>
    </div>
  );
};

export default OpenBanner;
