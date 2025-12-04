import siteContent from "../../assets/siteContent";
import BadgeContainer from "../BadgeContainer";
import RPhone from "../RPhone";

const OpenBanner = () => {
  const { title, subTitle, tagLine } = siteContent.home.openingBanner;

  return (
    <div className="w-full flex flex-1 justify-center items-center">
      <div className="inner-container opening-banner">
        <div className="animate-pulseScale inline-block block flex justify-center">
          <img className="app-icon" src="app-icon.png" />
          <h1 className="">{title}</h1>
          <p className=" pb-4 font-bold">{subTitle}</p>
          <p className=" pb-1 font-bold md:text-xl ">{tagLine}</p>
          <BadgeContainer />
        </div>
        <div className="flex items-center justify-center">
          <div
            className=" absolute 
                        w-[600px] 
                        h-[600px] 
                        rounded-full 
                        bg-TERTIARY
                        opacity-40 
                        blur-[120px] 
                        z-0
                    "
          ></div>
          <RPhone name="iPhone" />
        </div>
      </div>
    </div>
  );
};

export default OpenBanner;
