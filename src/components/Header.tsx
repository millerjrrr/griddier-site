import { useEffect, useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="h-20"></div>
      <header className="header">
        <div className="inner-container flex-row">
          <img
            src="app-icon.png"
            className={`site-icon bg-PRIMARY md:bg-transparent rounded-[] ${
              show ? "opacity-100" : "md:opacity-0"
            }`}
          />
          <div className="flex flex-row bg-PRIMARY md:bg-transparent pl-2 rounded-l-full translate-x-[8px] border-2 border-TERTIARY border-r-0 md:border-0">
            <a href="/" className="app-link">
              HOME
            </a>
            <a href="/about" className="app-link">
              ABOUT
            </a>
            <a href="contact" className="app-link">
              WEB APP
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
