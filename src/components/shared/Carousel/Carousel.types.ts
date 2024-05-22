import { ResourceModel } from "@/utils/Models";

export type SlideType = {
  poster: ResourceModel;
  href: string;
};

export interface CarouselProps {
  title?: string;
  items: SlideType[];
}
