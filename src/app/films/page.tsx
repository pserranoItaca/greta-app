import Card from "@/components/shared/Card/Card";
import Carousel from "@/components/shared/Carousel/Carousel";
import FeaturedMovie from "@/components/shared/FeaturedMovie/FeaturedMovie";
import styles from "./Films.module.scss";
import { Divider, Title } from "@mantine/core";
import useFilms from "./useFilms";
import { FilmModel } from "@/infraestructure/models/Film";
import { useState, useEffect } from "react";
import AuthGuard from "@/components/shared/AuthGuard/AuthGuard";

const Films = async () => {
  const fetchFilms = (slug: string) => {
    const data = fetch(`http://localhost:3010/films/category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug }),
    })
      .then((res) => res.json())

      .catch((error) => {});
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

  console.log(tragedyFilms);

  return (
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
              title={"Criando ratas"}
              award={"most stramed this month"}
              description={""}
              poster={{
                src: "https://www.w3schools.com/html/img_chania.jpg",
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
              title={"Criando ratas"}
              award={"most stramed this month"}
              description={""}
              poster={{
                src: "https://www.w3schools.com/html/img_chania.jpg",
                alt: "alt",
              }}
            />
            <FeaturedMovie
              title={"Criando ratas"}
              award={"most stramed this month"}
              description={""}
              poster={{
                src: "https://www.w3schools.com/html/img_chania.jpg",
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
          <section className={styles.cards}>
            <div className={styles.container} style={{}}>
              <Title className={styles.wakala}>Nuestra selección de hoy</Title>
              <Title className={styles.wakala}>Nuestra selección de hoy</Title>
              <Title className={styles.wakala}>Nuestra selección de hoy</Title>
            </div>
          </section>
          <Carousel
            title="Las mejores peliculas de 🏆 Documental"
            items={documentaryFilms}
          />
          <Divider my="md" />
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
  );
};

export default Films;
