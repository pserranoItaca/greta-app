import { ResourceModel } from "@/utils/Models";

export interface FeaturedMovieProps {
  title: string;
  award?: string;
  href: string;
  description: string;
  poster: ResourceModel;
}
