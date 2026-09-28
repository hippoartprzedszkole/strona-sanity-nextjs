import { PopulatedPageForLink } from "@/src/types/common";

export interface IHeader {
  menu: PopulatedPageForLink[];
  userSettings: PopulatedPageForLink[];
  logout: string;
  webVersion: string;
}
