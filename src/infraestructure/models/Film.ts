import { ResourceModel } from "@/utils/Models";
import { CommentModel } from "./Comment";
import { GenreModel } from "./Genre";

export type FilmModel = {
  id: string;
  id_user: string;
  route: string;
  title: string;
  description: string;
  genres: GenreModel[];
  poster: ResourceModel;
  views: number;
  rating: number;
  comments: CommentModel[];
  director: string;
  art: string;
  sound: string;
  actors: string;
};
