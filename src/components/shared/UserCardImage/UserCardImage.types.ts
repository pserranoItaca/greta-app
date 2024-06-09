import { ResourceModel } from "@/utils/Models";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { MouseEventHandler } from "react";

export interface UserCardImageProps {
  name: string;
  email: string;
  loginDate: string;
  filmsUploaded: number;
  avatar: string | StaticImport;
  views: number;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}
