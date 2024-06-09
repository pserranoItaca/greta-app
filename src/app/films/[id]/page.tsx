"use client";

import Movie from "@/components/shared/Movie/Movie";
import { FilmModel } from "@/infraestructure/models/Film";
import {
  ActionIcon,
  Divider,
  NumberFormatter,
  Pill,
  Rating,
  Tabs,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import styles from "./Film.module.scss";
import { usePathname } from "next/navigation";
import AuthGuard from "@/components/shared/AuthGuard/AuthGuard";
import { useEffect, useState, useCallback } from "react";
import { GenreModel } from "@/infraestructure/models/Genre";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { EmptyData } from "@/testing/DumbData";

const Film = () => {
  const email = localStorage.getItem("user") || "";

  const pathname = usePathname();
  const slug = pathname.split("/").pop(); // Ensure the correct slug is extracted
  const [likedFilms, setLikedFilms] = useState<FilmModel[]>([]);
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [film, setFilm] = useState<FilmModel>(EmptyData[0]);
  const [genres, setGenres] = useState<GenreModel[]>([]);
  const [liked, setLiked] = useState<boolean>(false);

  const fetchFilmData = useCallback(async () => {
    try {
      const filmResponse = await fetch(`http://localhost:3010/films/${slug}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const filmData = await filmResponse.json();
      setFilm(filmData);

      const genresResponse = await fetch(
        `http://localhost:3010/films/genres/${slug}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const genresData = await genresResponse.json();
      setGenres(genresData);

      setVideoUrl(`http://localhost:3010/films/resource/es_video_01.mp4`);

      const likedFilmsResponse = await fetch(
        `http://localhost:3010/user/dashboard/films/${email}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const likedFilmsData: FilmModel[] = await likedFilmsResponse.json();
      setLikedFilms(likedFilmsData);

      const isLiked = likedFilmsData.some((film) => film.id === slug);
      setLiked(isLiked);
    } catch (error) {}
  }, [email, slug]);

  useEffect(() => {
    fetchFilmData();
  }, [fetchFilmData]);

  const handleLike = async () => {
    try {
      setLiked(!liked);
      const url = liked
        ? `http://localhost:3010/films/unlike/${slug}`
        : `http://localhost:3010/films/${slug}`;

      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!liked) {
        setLikedFilms([...likedFilms, film]);
      } else {
        setLikedFilms(likedFilms.filter((f) => f.id !== slug));
      }
    } catch (error) {}
  };

  return (
    <>
      <AuthGuard>
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
                  <Rating
                    value={film?.rating ? (film?.rating * 5) / 10 : 0}
                    fractions={2}
                    readOnly
                    size={"lg"}
                  />
                  {/* <NumberFormatter
                  style={{margin}}
                    prefix="Visualizaciones: "
                    value={film.views}
                    thousandSeparator
                  /> */}
                </div>

                <ActionIcon
                  size={42}
                  onClick={handleLike}
                  variant="filled"
                  aria-label="ActionIcon with size as a number"
                >
                  {liked ? <IconHeartFilled /> : <IconHeart />}
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
                  Géneros
                </Text>
                {genres?.map((genre) => (
                  <Pill key={genre.id}>{genre.route}</Pill>
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
                  Director de Sonido
                </Text>
                <Text>{film?.sound}</Text>
              </Tabs.Panel>
            </Tabs>
          </div>
          <br />
          <Divider my="md" />
        </div>
      </AuthGuard>
    </>
  );
};

export default Film;
