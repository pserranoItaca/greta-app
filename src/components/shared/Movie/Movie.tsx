import Video from "next-video";
import getStarted from "/videos/get-started.mp4";
import { ResourceModel } from "@/utils/Models";
import ReactPlayer from "./ReactPlayer/ReactPlayer";
import { FilmModel } from "@/infraestructure/models/Film";

interface MovieProps {
  id: string;
}

const Movie = ({ id }: MovieProps) => {
  return <Video controls src={getStarted} poster={getStarted.poster} />;
};
export default Movie;
