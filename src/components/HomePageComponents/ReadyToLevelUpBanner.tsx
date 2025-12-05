import siteContent from "../../assets/siteContent";
import BadgeContainer from "../BadgeContainer";
import RPhone from "../RPhone";
import { FaCheck } from "react-icons/fa";

const BulletTick: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex items-start gap-2">
      <div className="flex items-center justify-center rounded-full bg-WHITE p-1 text-PRIMARY">
        <FaCheck size={10} />
      </div>
      <p className="text-WHITE">{text}</p>
    </div>
  );
};

const ReadyToLevelUpBanner = () => {
  const { title, bullets } = siteContent.home.readyToLevelUpBanner;

  return (
    <div className="flex w-full flex-1 items-center justify-center">
      <div className="inner-container flex-col md:flex-row">
        <div className="flex flex-1 items-center">
          <div>
            <div className="h-25 items-left m-1 flex flex-1 flex-col px-5 text-left md:items-start">
              <h3 className="text-center md:text-left">READY TO LEVEL UP</h3>
              <h2 className="mb-4 whitespace-pre-line text-center md:text-left">
                {title}
              </h2>
              {bullets.map((_, index) => (
                <BulletTick key={index} text={bullets[index]} />
              ))}
              <BadgeContainer left />
            </div>
          </div>
        </div>
        <div className="relative flex h-[500px] flex-row items-center justify-center overflow-x-hidden md:overflow-x-visible">
          <div className="absolute z-0 h-[100px] w-[100px] rounded-full bg-WHITE opacity-100 blur-[120px] md:h-[600px] md:w-[600px] md:opacity-40"></div>
          <div className="flex justify-center">
            <RPhone name="gPhone-L" scale={250} screenshots={["RangeList"]} />
          </div>
          <div className="flex justify-center">
            <RPhone
              name="gPhone-R"
              scale={250}
              screenshots={["ProgressViewer"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToLevelUpBanner;
