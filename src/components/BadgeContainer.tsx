import { urls } from "../assets/urls";

const BadgeContainer: React.FC<{ left?: boolean }> = ({ left }) => {
  return (
    <div className={`badge-container w-full ${left ? "lg:align-left" : ""}`}>
      <a
        href={urls.appStore}
        className={"app-link"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="images/app-store.svg"
          className={`badge ${left ? "pl-0 lg:pl-0" : ""}`}
        />
      </a>
      <a
        href={urls.playStore}
        className="app-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="images/play-store.svg" className="badge" />
      </a>
    </div>
  );
};

export default BadgeContainer;
