import Phone1 from "./Phone1";

const OpenBanner = () => {
  return (
    <div className="opening-banner">
      <div className="flex flex-col items-center">
        <h1>GRIDDIER</h1>
        <p>Take your preflop game to the next level!</p>
        <div className="badge-container">
          <img src="images/app-store.svg" className="badge" />
          <img src="images/play-store.svg" className="badge" />
        </div>
      </div>
      <div className="ph-[100px]">
        <Phone1 source="screenshots/Trainer.jpg" />
      </div>
    </div>
  );
};

export default OpenBanner;
