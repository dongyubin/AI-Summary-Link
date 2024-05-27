import { LucideIcon, RocketIcon } from "lucide-react";
import { IconType } from "react-icons";
import { TbDownload } from "react-icons/tb";
export const BTNS_EN = [
  {
    title: "GET CODE",
    content:
      `https://github.com/dongyubin/AI-Summary-Link`,
    icon: RocketIcon,
  },
  {
    title: "DOWNLOAD",
    content:
      `https://buymeacoffee.com/dongyubin/e/257941`,
    icon: TbDownload,
  },

];


interface BTNSCollection {
  [key: `BTNS_${string}`]: {
    title: string;
    content: string;
    icon: IconType | LucideIcon;
  }[];
}
export const ALL_BTNS: BTNSCollection = {
  BTNS_EN,
}