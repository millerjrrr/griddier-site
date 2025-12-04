import siteContent from "../../assets/siteContent";
import BadgeContainer from "../BadgeContainer";
import RPhone from "../RPhone";
import { FaCheck } from "react-icons/fa";

const BulletTick: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex items-start gap-2">
      <div className="bg-WHITE text-PRIMARY p-1 rounded-full flex items-center justify-center">
        <FaCheck size={10} />
      </div>
      <p className="text-WHITE">{text}</p>
    </div>
  );
};

const ReadyToLevelUpBanner = () => {
  const { title, bullets } = siteContent.home.readyToLevelUpBanner;

  return (
    <div className="w-full flex flex-1 justify-center items-center">
      <div className="inner-container flex-col md:flex-row">
        <div className="flex flex-1  items-center">
          <div>
            <div className="h-25 flex flex-1 flex-col items-start m-1  px-5  text-left">
              <h3>READY TO LEVEL UP</h3>
              <h2 className="mb-4  text-left whitespace-pre-line">{title}</h2>
              {bullets.map((_, index) => (
                <BulletTick key={index} text={bullets[index]} />
              ))}
              <BadgeContainer left />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-row h-[500px] justify-center items-center">
          {/* Glowing back light */}
          <div
            className=" absolute 
                        w-[600px] 
                        h-[600px] 
                        rounded-full 
                        bg-WHITE
                        opacity-40 
                        blur-[120px] 
                        z-0
                    "
          ></div>
          <div className="flex justify-center">
            <RPhone name="gPhone-L" scale={250} />
          </div>
          <div className="flex justify-center">
            <RPhone name="gPhone-R" scale={250} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToLevelUpBanner;
