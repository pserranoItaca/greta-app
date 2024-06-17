import { AccordionItemType } from "@/components/shared/Accordion/Accordion.types";
import { FilmModel } from "@/infraestructure/models/Film";
import { GenreModel } from "@/infraestructure/models/Genre";

export const FAQ: AccordionItemType[] = [
  {
    icon: "📺",
    value: "¿Cómo me suscribo?",
    description:
      "Para suscribirte a nuestra plataforma, visita nuestra página de registro, elige un plan de suscripción y sigue las instrucciones para crear tu cuenta. Aceptamos varios métodos de pago, incluyendo tarjetas de crédito y débito.",
  },
  {
    icon: "🎥",
    value: "¿Qué contenido está disponible?",
    description:
      "Nuestra plataforma ofrece una amplia variedad de películas, series, documentales y programas exclusivos. Actualizamos nuestro catálogo regularmente para asegurarnos de que siempre encuentres algo nuevo para ver.",
  },
  {
    icon: "💻",
    value: "¿En qué dispositivos puedo ver contenido?",
    description:
      "Puedes disfrutar de nuestro contenido en una variedad de dispositivos, incluyendo smartphones, tabletas, smart TVs, computadoras y consolas de videojuegos. Solo necesitas descargar nuestra aplicación o acceder a nuestro sitio web.",
  },
  {
    icon: "❓",
    value: "¿Cómo puedo contactar al soporte?",
    description:
      "Si necesitas ayuda, puedes contactar a nuestro equipo de soporte a través de nuestro chat en vivo, enviando un correo electrónico a soporte@plataforma.com, o llamando a nuestro número de atención al cliente disponible en nuestra página de contacto.",
  },
];

export const TitleMapDD = [
  "Disfruta GRATIS de todo el catálogo de GRETA",
  "Disfruta GRATIS de todo el catálogo de GRETA",
  "Disfruta GRATIS de todo el catálogo de GRETA",
];

export const FilmGenres = [
  "action",
  "comedy",
  "horror",
  "romance",
  "sci-fi",
  "mystery",
  "drama",
  "documentary",
  "crime",
  "tragedy",
];

export const FilmGenresTypedDD: GenreModel[] = [
  { id: "1", genre: "🎬 Acción", route: "action" },
  { id: "2", genre: "😂 Comedia", route: "comedy" },
  { id: "3", genre: "😱 Terror", route: "horror" },
  { id: "4", genre: "🎀 Romance", route: "romance" },
  { id: "5", genre: "👽 Ciencia Ficción", route: "sci-fi" },
  { id: "6", genre: "🕵️‍♂️ Misterio", route: "mystery" },
  { id: "7", genre: "🎭 Drama", route: "drama" },
  { id: "8", genre: "🏆 Documental", route: "documentary" },
  { id: "9", genre: "💼 Crimen", route: "crime" },
  { id: "10", genre: "😢 Tragedia", route: "tragedy" },
];

export const EmptyFilmData: FilmModel = {
  id: "",
  id_user: "",
  route: "",
  title: "",
  descript: "",
  genre: "",
  poster: "",
  views: 0,
  rating: 0,
  comments: [],
  director: "",
  art: "",
  sound: "",
  actors: "",
};

export const EmptyData: FilmModel[] = [
  {
    id: "",
    id_user: "",
    route: "",
    title: "",
    descript: "",
    genre: "",
    poster: "",
    views: 0,
    rating: 0,
    comments: [],
    director: "",
    art: "",
    sound: "",
    actors: "",
  },
  {
    id: "",
    id_user: "",
    route: "",
    title: "",
    descript: "",
    genre: "",
    poster: "",
    views: 0,
    rating: 0,
    comments: [],
    director: "",
    art: "",
    sound: "",
    actors: "",
  },
];
