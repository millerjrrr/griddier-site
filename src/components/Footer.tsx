import siteContent from "../assets/siteContent";

export default function Footer() {
  const { aboutUs, address } = siteContent.footer;
  return (
    <footer className="w-full bg-PRIMARY flex flex:col justify-center">
      <div className="inner-container flex flex-col md:flex-row">
        <div className="block text-left px-4 pt-3">
          <h2 className="pb-3">About Us</h2>
          <p className="text-WHITE">{aboutUs}</p>
        </div>
        <div className="block text-left px-4 pt-3">
          <h2 className="pb-3">Useful Links</h2>
          <p className=" app-link">Terms & Conditions</p>
          <p className=" app-link">Privacy Policy</p>
        </div>
        <div className="block text-left px-4 pt-3 whitespace-pre-line">
          <h2 className="pb-3">Address</h2>
          <p className="text-WHITE">{address}</p>
        </div>
      </div>
    </footer>
  );
}
