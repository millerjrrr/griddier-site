export interface ContentStructure {
  header: {
    tab1: string;
    tab2: string;
    tab3?: string;
  };
  footer: {
    aboutUs: string;
    address: string;
  };
  home: {
    openingBanner: {
      title: string;
      subTitle: string;
      tagLine: string;
    };
    informationBanner: {
      introductionTitle: string;
      introductionText: string;
      title1: string;
      description1: string;
      title2: string;
      description2: string;
      title3: string;
      description3: string;
    };
  };
}
