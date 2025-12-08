import { getSiteContent } from "../../getSiteContent";

export default function VideoBanner() {
  const site = getSiteContent();

  const videoPromotion = site.home?.videoPromotion ?? "";

  return (
    videoPromotion && (
      <div className="flex w-full items-center justify-center px-4 py-10">
        <div className="inner-container">
          <div className="w-full">
            <div className="relative w-full overflow-hidden rounded-xl pb-[56.25%]">
              <iframe
                className="absolute left-0 top-0 h-full w-full rounded-xl"
                src={videoPromotion}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
