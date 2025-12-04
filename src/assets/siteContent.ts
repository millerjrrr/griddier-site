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
      titles: ["PRIORITIZE", "MEMORIZE", "REVISE"],
      descriptions: [
        "While you can study ranges in any order, following our learning path allows you to prioritize the ranges that matter most.",
        "Griddier is designed to make range memorization easy. Surprise yourself by how fast you can memorize these ranges perfectly!",
        "Each time you revise a range perfectly its level increases. Having a range on level 6 for example means the student revised that range perfectly 6 times in a row!",
      ],
    },
    readyToLevelUpBanner: {
      title: "Take Your Preflop Game \nTo The Next Level",
      bullets: [
        "Download Griddier for free, no account needed",
        "Free while we grow our first 100 players",
        "Build real range memory through fast-paced repetition",
        "Made for both high level grinders and beginners",
      ],
    },
  },
};

export default siteContent;
