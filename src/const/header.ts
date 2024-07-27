import { PATHS } from "./route";

export const HEADER_TEXT = {
  [PATHS.MAIN]: "mem.gem",
  [PATHS.PURCHASE]: "coin purchase",
  [PATHS.TOKEN.MAIN + `/${PATHS.TOKEN.TRADE}`]: "token info",
  [PATHS.TOKEN.MAIN + `/${PATHS.TOKEN.ABOUT}`]: "token info",
};
