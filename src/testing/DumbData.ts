import { AccordionProps } from "@/components/shared/Accordion/Accordion.types";
import { SlideType } from "@/components/shared/Carousel/Carousel.types";
import { FilmModel } from "@/infraestructure/models/Film";
import { ResourceModel } from "@/utils/Models";

export const CarouselDD: SlideType[] = [
  {
    poster: {
      src: "https://www.w3schools.com/html/img_girl.jpg",
      alt: "alt",
    },
    href: "http://localhost:3000/",
  },
  {
    poster: {
      src: "https://www.w3schools.com/html/img_chania.jpg",
      alt: "alt",
    },
    href: "http://localhost:3000/",
  },
  {
    poster: {
      src: "https://www.w3schools.com/html/pic_trulli.jpg",
      alt: "alt",
    },
    href: "http://localhost:3000/",
  },
  {
    poster: {
      src: "https://www.w3schools.com/html/img_girl.jpg",
      alt: "alt",
    },
    href: "http://localhost:3000/",
  },
  {
    poster: {
      src: "https://www.w3schools.com/html/img_chania.jpg",
      alt: "alt",
    },
    href: "http://localhost:3000/",
  },
  {
    poster: {
      src: "https://www.w3schools.com/html/pic_trulli.jpg",
      alt: "alt",
    },
    href: "http://localhost:3000/",
  },
  {
    poster: {
      src: "https://www.w3schools.com/html/img_girl.jpg",
      alt: "alt",
    },
    href: "http://localhost:3000/",
  },
  {
    poster: {
      src: "https://www.w3schools.com/html/img_chania.jpg",
      alt: "alt",
    },
    href: "http://localhost:3000/",
  },
  {
    poster: {
      src: "https://www.w3schools.com/html/pic_trulli.jpg",
      alt: "alt",
    },
    href: "http://localhost:3000/",
  },
];

export const GalleryDD: ResourceModel[] = [
  {
    src: "https://www.w3schools.com/html/img_girl.jpg",
    alt: "alt",
  },
  { src: "https://www.w3schools.com/html/img_chania.jpg", alt: "alt" },
  { src: "https://www.w3schools.com/html/pic_trulli.jpg", alt: "alt" },
];
export const UserTestValues = [
  { value: "34K", label: "Followers" },
  { value: "187", label: "Follows" },
  { value: "1.6K", label: "Posts" },
];
export const FilmsTestValues: FilmModel[] = [
  {
    id: "1",
    id_user: "user123",
    route: "/inception",
    title:
      "Criando ratas: La historia de los cocainómanos adictos a la yahuasca peruana de los grupos paramilitares",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology.",
    genres: [
      { id: "1", genre: "Action" },
      { id: "2", genre: "Sci-Fi" },
    ],
    poster: {
      src: "https://www.w3schools.com/html/img_girl.jpg",
      alt: "alt",
    },
    views: 1500000,
    rating: 4.8,
    comments: [
      {
        id: "1",
        id_film: "1",
        id_user: "user321",
        comment: "Mind-blowing experience!",
      },
      {
        id: "2",
        id_film: "1",
        id_user: "user456",
        comment: "A masterpiece of modern cinema.",
      },
    ],
    director: "Christopher Nolan",
    art: "Guy Hendrix Dyas",
    sound: "Richard King",
    actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
  },
  {
    id: "2",
    id_user: "user456",
    route: "/the-dark-knight",
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker emerges, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    genres: [
      { id: "3", genre: "Action" },
      { id: "4", genre: "Drama" },
    ],
    poster: {
      src: "https://www.w3schools.com/html/img_girl.jpg",
      alt: "alt",
    },
    views: 2000000,
    rating: 4.9,
    comments: [
      {
        id: "3",
        id_film: "2",
        id_user: "user789",
        comment: "Heath Ledger's performance is legendary.",
      },
      {
        id: "4",
        id_film: "2",
        id_user: "user101",
        comment: "An iconic portrayal of Batman.",
      },
    ],
    director: "Christopher Nolan",
    art: "Nathan Crowley",
    sound: "Lora Hirschberg",
    actors: "Christian Bale, Heath Ledger, Aaron Eckhart",
  },
  {
    id: "3",
    id_user: "user789",
    route: "/interstellar",
    title: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    genres: [
      { id: "5", genre: "Adventure" },
      { id: "6", genre: "Drama" },
      { id: "7", genre: "Sci-Fi" },
    ],
    poster: {
      src: "https://www.w3schools.com/html/img_girl.jpg",
      alt: "alt",
    },
    views: 1800000,
    rating: 4.7,
    comments: [
      {
        id: "5",
        id_film: "3",
        id_user: "user112",
        comment: "A visually stunning and emotional journey.",
      },
      {
        id: "6",
        id_film: "3",
        id_user: "user113",
        comment: "Christopher Nolan's finest work.",
      },
    ],
    director: "Christopher Nolan",
    art: "Nathan Crowley",
    sound: "Gary Rizzo",
    actors: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
  },
];
export const FilmGenres = [
  "🎬 Action",
  "😂 Comedy",
  "😱 Horror",
  "❤️ Romance",
  "👽 Sci-Fi",
  "🕵️‍♂️ Mystery",
  "🎭 Drama",
  "🎶 Musical",
  "🏆 Documentary",
  "🚀 Adventure",
  "🎉 Family",
  "🌍 Historical",
  "💼 Crime",
  "😢 Tragedy",
  "💥 Thriller",
  "🎨 Art",
  "👑 Fantasy",
  "🧙‍♂️ Fantasy",
  "🚂 Western",
  "👻 Supernatural",
];
