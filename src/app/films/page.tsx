import Card from "@/components/shared/Card/Card";
import Carousel from "@/components/shared/Carousel/Carousel";
import FeaturedMovie from "@/components/shared/FeaturedMovie/FeaturedMovie";
import styles from "./Films.module.scss";
import { Button, Divider, Title } from "@mantine/core";
import useFilms from "./useFilms";
import { FilmModel } from "@/infraestructure/models/Film";
import { useState, useEffect } from "react";
import AuthGuard from "@/components/shared/AuthGuard/AuthGuard";

const Films = async () => {
  const fetchFilms = async (slug: string) => {
    const response = await fetch(
      `http://localhost:3010/films/category/${slug}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch films for category: ${slug}`);
    }
    const data = (await response.json()) as FilmModel[];

    return data;
  };

  const actionFilms: FilmModel[] = await fetchFilms("action");
  console.log(actionFilms);
  const comedyFilms: FilmModel[] = await fetchFilms("comedy");
  const horrorFilms: FilmModel[] = await fetchFilms("horror");
  const romanceFilms: FilmModel[] = await fetchFilms("romance");
  const sciFiFilms: FilmModel[] = await fetchFilms("sci-fi");
  const mysteryFilms: FilmModel[] = await fetchFilms("mystery");
  const dramaFilms: FilmModel[] = await fetchFilms("drama");
  const documentaryFilms: FilmModel[] = await fetchFilms("documentary");
  const crimeFilms: FilmModel[] = await fetchFilms("crime");
  const tragedyFilms: FilmModel[] = await fetchFilms("tragedy");

  return (
    <>
      <AuthGuard
        children={
          <>
            <Carousel
              title="Las mejores peliculas de 😂 Comedia"
              items={comedyFilms}
            />
            <Divider my="md" />
            <div style={{ padding: "2%" }}>
              <FeaturedMovie
                href={romanceFilms[0].id}
                title={romanceFilms[0].title}
                award={"Seguro que necesitas un poco de..."}
                description={romanceFilms[0].descript}
                poster={{
                  src: romanceFilms[0].poster,
                  alt: "alt",
                }}
              />
            </div>
            <section className={styles.topCarousels}>
              <Carousel
                title="Las mejores peliculas de 💼 Crimen"
                items={crimeFilms}
              />
              <Divider my="md" />

              <Carousel
                title="Las mejores peliculas de 🎀 Romance"
                items={romanceFilms}
              />
              <Divider my="md" />

              <Carousel
                title="Las mejores peliculas de 👽 Ciencia Ficción"
                items={sciFiFilms}
              />
              <Divider my="md" />
            </section>
            <div style={{ padding: "2%" }}>
              <FeaturedMovie
                href={tragedyFilms[0].id}
                title={tragedyFilms[0].title}
                award={"Dejate sorprender por..."}
                description={tragedyFilms[0].descript}
                poster={{
                  src: tragedyFilms[0].poster,
                  alt: "alt",
                }}
              />
            </div>
            <Carousel
              title="Las mejores peliculas de 🕵️‍♂️ Misterio"
              items={mysteryFilms}
            />
            <Divider my="md" />
            <section>
              <Carousel
                title="Las mejores peliculas de 🎭 Drama"
                items={dramaFilms}
              />
              <Divider my="md" />

              <Carousel
                title="Las mejores peliculas de 😱 Terror"
                items={horrorFilms}
              />
              <Divider my="md" />
            </section>

            <Carousel
              title="Las mejores peliculas de 🏆 Documental"
              items={documentaryFilms}
            />
            <Divider my="md" />
            <FeaturedMovie
              href={sciFiFilms[0].id}
              title={sciFiFilms[0].title}
              award={"Recomendación del chef!"}
              description={sciFiFilms[0].descript}
              poster={{
                src: sciFiFilms[0].poster,
                alt: "alt",
              }}
            />
            <Carousel
              title="Las mejores peliculas de 🎬 Acción"
              items={actionFilms}
            />
            <Divider my="md" />
            <Carousel
              title="Las mejores peliculas de 😢 Tragedia"
              items={tragedyFilms}
            />
            <Divider my="md" />
            <br />
          </>
        }
      ></AuthGuard>
    </>
  );
};

export default Films;
