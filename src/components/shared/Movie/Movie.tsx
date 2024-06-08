import Video from "next-video";
import getStarted from "/videos/get-started.mp4";
import { ResourceModel } from "@/utils/Models";
import ReactPlayer from "./ReactPlayer/ReactPlayer";
import { FilmModel } from "@/infraestructure/models/Film";

interface MovieProps {
  id: string;
  src: string;
  // poster: ResourceModel;
}

const Movie = ({ id, src }: MovieProps) => {
  return <Video controls src={src} />;
};
export default Movie;
