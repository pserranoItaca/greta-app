"use client";

import Card from "@/components/shared/Card/Card";
import { FilmModel } from "@/infraestructure/models/Film";
import { FilmGenresTypedDD, RomanceFilms } from "@/testing/DumbData";
import { Carousel } from "@mantine/carousel";
import { Grid, Title } from "@mantine/core";
import { usePathname } from "next/navigation";
import styles from "./CategoryFilms.module.scss";
import AuthGuard from "@/components/shared/AuthGuard/AuthGuard";

const CategoryFilms = () => {
  const pathname = usePathname();
  const slug = pathname.split("/")[3];
  const genre = FilmGenresTypedDD.find((item) => item.route === slug);

  //! CONSULTA POR CATEGORIA
  const films = RomanceFilms;

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
            {films.map((film) => (
              <Carousel.Slide>
                {" "}
                <Card
                  title={film.title}
                  text={film.description}
                  genres={film.genres}
                  image={{ src: film.poster.src, alt: film.poster.alt }}
                  href={`/${film.id}`}
                />
              </Carousel.Slide>
            ))}
          </Carousel>

          {/* <Grid style={{ padding: "5px" }}>
      {films.map((film) => (
        <>
          <Grid.Col span={4} style={{ padding: "15px" }}>
            <Card
              title={film.title}
              text={film.description}
              genres={film.genres}
              image={{ src: film.poster.src, alt: film.poster.alt }}
              href={`/${film.id}`}
            />
          </Grid.Col>
        </>
      ))}
    </Grid> */}
        </div>
      }
    />
  );
};
export default CategoryFilms;
