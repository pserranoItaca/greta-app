"use client";

import Card from "@/components/shared/Card/Card";
import { FilmModel } from "@/infraestructure/models/Film";
import { FilmGenresTypedDD, RomanceFilms } from "@/testing/DumbData";
import { Carousel } from "@mantine/carousel";
import { Grid, Title } from "@mantine/core";
import { usePathname } from "next/navigation";
import styles from "./CategoryFilms.module.scss";
import AuthGuard from "@/components/shared/AuthGuard/AuthGuard";
import { Suspense, useEffect, useState } from "react";

const CategoryFilms = () => {
  const pathname = usePathname();
  const slug = pathname.split("/")[3];
  console.log(slug);
  const genre = FilmGenresTypedDD.find((item) => item.route === slug);

  const [films, setFilms] = useState<FilmModel[]>();

  useEffect(() => {
    fetch(`http://localhost:3010/films/category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug }),
    })
      .then((res) => res.json())
      .then((data) => {
        setFilms(data);
      })
      .catch((error) => {
        console.error("Error fetching films:", error);
      });
  }, []);
  films?.map((film) => console.log(film));

  return (
    <AuthGuard
      children={
        <div className={styles.container}>
          <Title
            className={styles.container_title}
          >{`Las mejores películas de ${genre?.genre} ${
            genre?.genre.split(" ")[0]
          }`}</Title>

          <Carousel
            height={"100%"}
            withControls={false}
            align="start"
            loop
            defaultValue={1}
            slideGap={"md"}
            slideSize="33.333333%"
            slidesToScroll={3}
          >
            {films?.map((film) => (
              <Carousel.Slide>
                {" "}
                <Card
                  title={film.title}
                  text={film.descript}
                  genre={genre?.route}
                  // image={{ src: film.poster.src, alt: film.poster.alt }}
                  href={`/films/${film.id}`}
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      }
    />
  );
};
export default CategoryFilms;
