"use client";

import Movie from "@/components/shared/Movie/Movie";
import { FilmModel } from "@/infraestructure/models/Film";
import { HotelBudapestDD } from "@/testing/DumbData";
import {
  ActionIcon,
  Divider,
  Pill,
  Rating,
  Tabs,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import styles from "./Film.module.scss";
import { usePathname } from "next/navigation";
import { redirect } from "next/navigation";
import AuthGuard from "@/components/shared/AuthGuard/AuthGuard";
import { useEffect, useState } from "react";
import { GenreModel } from "@/infraestructure/models/Genre";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";

const Film = () => {
  const email = localStorage.getItem("user") || "";

  const pathname = usePathname();
  const slug = pathname[pathname.length - 1];
  const [likedFilms, setLikedFilms] = useState<FilmModel[]>();

  const [videoUrl, setVideoUrl] = useState<string>("");
  const [film, setFilm] = useState<FilmModel>();
  const [genres, setGenres] = useState<GenreModel[]>();

  useEffect(() => {
    fetch(`http://localhost:3010/films/${slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFilm(data);
      });

    fetch(`http://localhost:3010/films/genres/${slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setGenres(data);
      });
    // setVideoUrl(`http://localhost:3010/films/resource/${film?.title}.mp4`);
    setVideoUrl(`http://localhost:3010/films/resource/es_video_01.mp4`);

    fetch(`http://localhost:3010/user/dashboard/films/${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((films: FilmModel[]) => {
        setLikedFilms(films);
      })
      .catch((error) => {
        console.error("Error fetching films:", error);
      });
  }, []);

  const guessLiked = () => {
    likedFilms?.map((film) => {
      if (film.id === slug) return true;
    });
    return false;
  };

  const [liked, setLiked] = useState(guessLiked());

  const handleLike = () => {
    setLiked(!liked);
    if (!liked) {
      fetch(`http://localhost:3010/films/${slug}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
    }
    if (liked) {
      fetch(`http://localhost:3010/films/unlike/${slug}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
    }
  };

  console.log(film?.rating);

  return (
    <>
      <AuthGuard
        children={
          <div className={styles.film}>
            <div className={styles.film_media}>
              <br />
              <div
                className={styles.film_media_chunk}
                style={{
                  width: "60%",
                  margin: "auto",
                  padding: "2%",
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
              >
                <Title>{film?.title}</Title>
                <Movie id={""} src={videoUrl} />
                <div className={styles.rating}>
                  <div>
                    {" "}
                    <Rating
                      value={film?.rating && (film?.rating * 5) / 10}
                      fractions={2}
                      readOnly
                      size={"lg"}
                    ></Rating>
                  </div>

                  <ActionIcon
                    size={42}
                    onClick={() => {
                      handleLike();
                    }}
                    variant="filled"
                    aria-label="ActionIcon with size as a number"
                  >
                    {!liked ? <IconHeart /> : <IconHeartFilled />}
                  </ActionIcon>
                </div>
              </div>
            </div>
            <div className={styles.film_text}>
              <Tabs
                defaultValue={"general"}
                classNames={{
                  panel: styles.panel,
                  list: styles.list,
                  tab: styles.tab,
                }}
              >
                <Tabs.List>
                  <Tabs.Tab value="general">Información general</Tabs.Tab>
                  <Tabs.Tab value="people">Personas involucradas</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="general">
                  <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                    Título
                  </Text>
                  <Text>{film?.title}</Text>
                  <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                    Descripción
                  </Text>
                  <Text>{film?.descript}</Text>
                  <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                    Generos
                  </Text>
                  {genres?.map((genre) => (
                    <Pill> {genre.route} </Pill>
                  ))}
                </Tabs.Panel>
                <Tabs.Panel value="people">
                  <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                    Director
                  </Text>
                  <Text>{film?.director}</Text>
                  <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                    Director de Arte
                  </Text>
                  <Text>{film?.art}</Text>
                  <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                    Director de sonido
                  </Text>
                  <Text>{film?.sound}</Text>
                </Tabs.Panel>
              </Tabs>
            </div>
            <br />
            <Divider my="md" />
          </div>
        }
      />
    </>
  );
};
export default Film;
