import { MouseEventHandler } from "react";

export type StatType = {
  value: string;
  label: string;
};

export interface UserCardImageProps {
  infoUser: StatType[];
  href?: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}
