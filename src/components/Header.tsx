export default function Header() {
  return (
    <div>
      <div className="h-20"></div>
      <header className="header">
        <div className="inner-container flex-row">
          <img
            src="adaptive-icon.png"
            className="site-icon bg-PRIMARY md:bg-transparent rounded-full"
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
