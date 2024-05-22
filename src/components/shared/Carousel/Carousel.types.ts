import { ResourceModel } from "@/utils/Models";

export type SlideType = {
  posters: ResourceModel;
  href: string;
};

export interface CarouselProps {
  items: SlideType[];
}
