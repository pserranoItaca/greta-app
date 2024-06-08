import { MouseEventHandler } from "react";

export interface UserCardImageProps {
  name: string;
  email: string;
  loginDate: string;
  filmsUploaded: number;
  views: number;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}
