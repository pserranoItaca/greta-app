import {
  AccordionItemType,
  AccordionProps,
} from "@/components/shared/Accordion/Accordion.types";
import { FilmModel } from "@/infraestructure/models/Film";
import { GenreModel } from "@/infraestructure/models/Genre";
import { ResourceModel } from "@/utils/Models";

export const FAQ: AccordionItemType[] = [
  {
    icon: "🍎",
    value: "Apples",
    description:
      "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
  },
  {
    icon: "🍌",
    value: "Bananas",
    description:
      "Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.",
  },
  {
    icon: "🥦",
    value: "Broccoli",
    description:
      "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
  },
];

export const TitleMapDD = [
  "Disfruta GRATIS de todo el catálogo de GRETA",
  "Disfruta GRATIS de todo el catálogo de GRETA",
  "Disfruta GRATIS de todo el catálogo de GRETA",
];

export const FilmGenres = [
  "🎬 Action",
  "😂 Comedy",
  "😱 Horror",
  "❤️ Romance",
  "👽 Sci-Fi",
  "🕵️‍♂️ Mystery",
  "🎭 Drama",
  "🏆 Documentary",
  "💼 Crime",
  "😢 Tragedy",
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
