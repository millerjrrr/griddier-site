import type { ContentStructure } from "./interface";

const siteContent: ContentStructure = {
  header: {
    tab1: "HOME",
    tab2: "ABOUT",
    tab3: "WEB APP",
  },
  footer: {
    aboutUs:
      "Griddier is a poker training app built to help serious players sharpen their preflop game with speed and confidence.",
    address:
      "Rua Cel. Luis Barroso \n Santo Amaro \n São Paulo \n SP · Brazil · 04750-030",
  },
  home: {
    openingBanner: {
      title: "GRIDDIER",
      subTitle: "preflop trainer",
      tagLine: "Take your preflop game to the next level",
    },
    informationBanner: {
      introductionTitle: "An Optimized Approach",
      introductionText: "Remove inefficient and unnecessary repetition",
      title1: "DEVELOP PICTURE PERFECT MEMORY",
      description1: "",
      title2: "",
      description2: "",
      title3: "",
      description3: "",
    },
  },
};

export default siteContent;
