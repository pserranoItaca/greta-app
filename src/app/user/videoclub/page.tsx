import AuthGuard from "@/components/shared/AuthGuard/AuthGuard";
import { FilmModel } from "@/infraestructure/models/Film";

const VideoClub = () => {
  //! Pilla el ID del usuario
  //! Hace una consulta para coger las pelis guardadas
  const filmsSaved: FilmModel[] = [];
  return (
    <AuthGuard
      children={
        <>
          <h1>Mi videoclub</h1>
          <p>Aqui irán las pelis del usuario, esta pagina sera UAUUUU</p>
        </>
      }
    />
  );
};

export default VideoClub;
