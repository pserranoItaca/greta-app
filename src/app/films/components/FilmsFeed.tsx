import { FilmModel } from "@/infraestructure/models/Film";

const FilmsFeed = async () => {
  const response: FilmModel[] = await fetch("http://localhost:3010/films", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  const films: FilmModel[] = [];

  for (let i = 0; i < response.length; i++) {
    const film: FilmModel = {
      id: films[i].id,
      id_user: "",
      route: "",
      title: films[i].title,
      description: films[i].description,
      genres: [],
      poster: { src: "", alt: "" },
      views: 0,
      rating: 0,
      comments: [],
      director: films[i].director,
      art: films[i].art,
      sound: films[i].sound,
      actors: films[i].actors,
    };
    films.push(film);
  }

  return <></>;
};
export default FilmsFeed;
