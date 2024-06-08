"use client";

import AuthGuard from "@/components/shared/AuthGuard/AuthGuard";
import { FilmModel } from "@/infraestructure/models/Film";
import { Carousel } from "@mantine/carousel";
import styles from "./Videoclub.module.scss";
import { Button, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import Card from "@/components/shared/Card/Card";

const VideoClub = () => {
  const email = localStorage.getItem("user");
  const [films, setFilms] = useState<FilmModel[]>([
    {
      id: "",
      id_user: "",
      route: "",
      title: "",
      descript: "",
      genre: "",
      poster: { src: "", alt: "" },
      views: 0,
      rating: 0,
      comments: [],
      director: "",
      art: "",
      sound: "",
      actors: "",
    },
  ]);
  useEffect(() => {
    fetch(`http://localhost:3010/user/dashboard/films/${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFilms(data);
      })
      .catch((error) => {
        console.error("Error fetching films:", error);
      });
  }, []);

  if (films.length !== 0) {
    return (
      <AuthGuard
        children={
          <div
            className={styles.container}
            style={{ width: "60%", margin: "auto" }}
          >
            <Title
              style={{
                padding: "15px",
                fontStyle: "italic",
                color: "#4e5152",
                fontWeight: "900",
              }}
            >
              Tus peliculas favoritas!
            </Title>
            <Carousel
              height={"100%"}
              withControls={false}
              align="start"
              loop={true}
              orientation="vertical"
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
  } else {
    return <h1>Todavia no te ha gustado ninguna película</h1>;
  }
};

export default VideoClub;
