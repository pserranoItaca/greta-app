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
  const [films, setFilms] = useState<FilmModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!email) {
      window.location.href = "/";
      return;
    }

    fetch(`http://localhost:3010/user/dashboard/films/${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFilms(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching films:", error);
        setIsLoading(false);
      });
  }, [email]);

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  return (
    <AuthGuard>
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
          ¡Tus películas favoritas!
        </Title>
        {films.length > 0 ? (
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
            {films.map((film) => (
              <Carousel.Slide key={film.id}>
                <Card
                  title={film.title}
                  text={film.descript}
                  image={film.poster}
                  href={`/films/${film.id}`}
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        ) : (
          <h1
            style={{
              color: "#4e5152",
              padding: "5px",
              height: "100vh",
              textAlign: "center",
            }}
          >
            Todavía no te ha gustado ninguna película
          </h1>
        )}
      </div>
    </AuthGuard>
  );
};

export default VideoClub;
