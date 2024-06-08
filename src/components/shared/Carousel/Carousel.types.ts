import { FilmModel } from "@/infraestructure/models/Film";
import { ResourceModel } from "@/utils/Models";

export interface CarouselProps {
  title?: string;
  items: FilmModel[];
  // onClick: () => void;
}
