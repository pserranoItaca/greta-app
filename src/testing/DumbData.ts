import { AccordionProps } from "@/components/shared/Accordion/Accordion.types";
import { SlideType } from "@/components/shared/Carousel/Carousel.types";
import { FilmModel } from "@/infraestructure/models/Film";
import { GenreModel } from "@/infraestructure/models/Genre";
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
      {
        id: "1",
        genre: "Action",
        route: "",
      },
      {
        id: "2",
        genre: "Sci-Fi",
        route: "",
      },
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
      {
        id: "3",
        genre: "Action",
        route: "",
      },
      {
        id: "4",
        genre: "Drama",
        route: "",
      },
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
      {
        id: "5",
        genre: "Adventure",
        route: "",
      },
      {
        id: "6",
        genre: "Drama",
        route: "",
      },
      {
        id: "7",
        genre: "Sci-Fi",
        route: "",
      },
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
  "🏆 Documentary",
  "💼 Crime",
  "😢 Tragedy",
];

export const FilmGenresTypedDD: GenreModel[] = [
  { id: "1", genre: "🎬 Action", route: "action" },
  { id: "2", genre: "😂 Comedy", route: "comedy" },
  { id: "3", genre: "😱 Horror", route: "horror" },
  { id: "4", genre: "❤️ Romance", route: "romance" },
  { id: "5", genre: "👽 Sci-Fi", route: "sci-fi" },
  { id: "6", genre: "🕵️‍♂️ Mystery", route: "mystery" },
  { id: "7", genre: "🎭 Drama", route: "drama" },
  { id: "8", genre: "🏆 Documentary", route: "documentary" },
  { id: "9", genre: "💼 Crime", route: "crime" },
  { id: "10", genre: "😢 Tragedy", route: "tragedy" },
];

export const HotelBudapestDD: FilmModel = {
  id: "1",
  id_user: "123",
  route: "/films/the-grand-budapest-hotel",
  title: "The Grand Budapest Hotel",
  description:
    "The adventures of Gustave H., a legendary concierge at a famous European hotel between the wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.",
  genres: [
    {
      id: "1",
      genre: "Comedy",
      route: "",
    },
    {
      id: "2",
      genre: "Drama",
      route: "",
    },
  ],
  poster: {
    src: "https://m.media-amazon.com/images/I/51zUbui+gbL.jpg",
    alt: "The Grand Budapest Hotel Poster",
  },
  views: 1250000,
  rating: 8.1,
  comments: [
    {
      id: "c1",
      id_user: "456",
      comment: "Amazing film with stunning visuals and a great storyline!",
      id_film: "",
    },
    {
      id: "c2",
      id_user: "789",
      comment: "Wes Anderson at his best. A must-watch.",
      id_film: "",
    },
  ],
  director: "Wes Anderson",
  art: "Adam Stockhausen",
  sound: "Alexandre Desplat",
  actors:
    "Ralph Fiennes, F. Murray Abraham, Mathieu Amalric, Adrien Brody, Willem Dafoe, Jeff Goldblum",
};
export const RomanceFilms: FilmModel[] = [
  {
    id: "1",
    id_user: "123",
    route: "/films/pride-and-prejudice",
    title: "Pride and Prejudice",
    description:
      "Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class. Can each overcome their own pride and prejudice?",
    genres: [
      {
        id: "4",
        genre: "Romance",
        route: "romance",
      },
    ],
    poster: {
      src: "https://www.w3schools.com/html/img_girl.jpg",
      alt: "alt",
    },
    views: 2000000,
    rating: 8.8,
    comments: [
      {
        id: "c1",
        id_user: "456",
        comment: "A beautiful adaptation of a classic novel!",
        id_film: "1",
      },
      {
        id: "c2",
        id_user: "789",
        comment: "Keira Knightley shines in this role.",
        id_film: "1",
      },
    ],
    director: "Joe Wright",
    art: "Sarah Greenwood",
    sound: "Dario Marianelli",
    actors:
      "Keira Knightley, Matthew Macfadyen, Rosamund Pike, Donald Sutherland",
  },
  {
    id: "2",
    id_user: "124",
    route: "/films/la-la-land",
    title: "La La Land",
    description:
      "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    genres: [
      {
        id: "4",
        genre: "Romance",
        route: "romance",
      },
    ],
    poster: {
      src: "https://www.w3schools.com/html/img_girl.jpg",
      alt: "alt",
    },
    views: 3000000,
    rating: 8.0,
    comments: [
      {
        id: "c3",
        id_user: "457",
        comment: "A vibrant and emotional musical masterpiece.",
        id_film: "2",
      },
      {
        id: "c4",
        id_user: "790",
        comment: "Emma Stone and Ryan Gosling are phenomenal!",
        id_film: "2",
      },
    ],
    director: "Damien Chazelle",
    art: "David Wasco",
    sound: "Justin Hurwitz",
    actors: "Ryan Gosling, Emma Stone, John Legend, Rosemarie DeWitt",
  },
  {
    id: "3",
    id_user: "125",
    route: "/films/the-notebook",
    title: "The Notebook",
    description:
      "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.",
    genres: [
      {
        id: "4",
        genre: "Romance",
        route: "romance",
      },
    ],
    poster: {
      src: "https://www.w3schools.com/html/img_girl.jpg",
      alt: "alt",
    },
    views: 5000000,
    rating: 7.8,
    comments: [
      {
        id: "c5",
        id_user: "458",
        comment: "A timeless love story that never gets old.",
        id_film: "3",
      },
      {
        id: "c6",
        id_user: "791",
        comment: "A beautiful tale of enduring love.",
        id_film: "3",
      },
    ],
    director: "Nick Cassavetes",
    art: "Sarah Knowles",
    sound: "Aaron Zigman",
    actors: "Ryan Gosling, Rachel McAdams, James Garner, Gena Rowlands",
  },
  {
    id: "4",
    id_user: "126",
    route: "/films/titanic",
    title: "Titanic",
    description:
      "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    genres: [
      {
        id: "4",
        genre: "Romance",
        route: "romance",
      },
    ],
    poster: {
      src: "https://www.w3schools.com/html/img_girl.jpg",
      alt: "alt",
    },
    views: 7000000,
    rating: 7.9,
    comments: [
      {
        id: "c7",
        id_user: "459",
        comment: "A heartbreaking love story set against a tragic backdrop.",
        id_film: "4",
      },
      {
        id: "c8",
        id_user: "792",
        comment: "Leonardo DiCaprio and Kate Winslet are unforgettable.",
        id_film: "4",
      },
    ],
    director: "James Cameron",
    art: "Peter Lamont",
    sound: "James Horner",
    actors: "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates",
  },
];
