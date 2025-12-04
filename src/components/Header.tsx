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
      <div className="h-15"></div>
      <header className="header">
        <div className="inner-container flex-row">
          <img
            src="app-icon.png"
            className={`site-icon rounded-[] bg-PRIMARY md:bg-transparent ${
              show ? "opacity-100" : "md:opacity-0"
            }`}
          />
          <div className="flex flex-row rounded-l-full border-2 border-r-0 border-TERTIARY bg-PRIMARY pl-2 md:border-0 md:bg-transparent">
            <a href="/" className="app-link p-2">
              HOME
            </a>
            <a href="/about" className="app-link p-2">
              ABOUT
            </a>
            <a href="contact" className="app-link p-2">
              WEB APP
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
