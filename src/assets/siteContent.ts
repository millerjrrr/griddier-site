import bananaCards from "./banana-cards";
import griddier from "./griddier";
import type { SitesStructure } from "./interface";
import linkKing from "./link-king";

const sites: SitesStructure = {
  "link-king": linkKing,
  griddier,
  "banana-cards": bananaCards,
};

export default sites;
