"use client";

import Movie from "@/components/shared/Movie/Movie";
import { FilmModel } from "@/infraestructure/models/Film";
import { HotelBudapestDD } from "@/testing/DumbData";
import { Divider, Pill, Rating, Tabs, Text, Title } from "@mantine/core";
import styles from "./Film.module.scss";
import { redirect } from "next/navigation";
import AuthGuard from "@/components/shared/AuthGuard/AuthGuard";

const Film = ({ id }: { id: string }) => {
  //! CONSULTA PIDIENDO PELI
  const film = HotelBudapestDD;
  return (
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
              <Title>{film.title}</Title>
              <Movie id={""} />
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
                <Text>{film.title}</Text>
                <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                  Descripción
                </Text>
                <Text>{film.description}</Text>
                <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                  Generos
                </Text>
                {film.genres.map((genre) => (
                  <Pill style={{ marginRight: "5px", width: "fit-content" }}>
                    {genre.genre}
                  </Pill>
                ))}
              </Tabs.Panel>
              <Tabs.Panel value="people">
                <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                  Director
                </Text>
                <Text>{film.director}</Text>
                <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                  Director de Arte
                </Text>
                <Text>{film.art}</Text>
                <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                  Director de sonido
                </Text>
                <Text>{film.sound}</Text>
              </Tabs.Panel>
            </Tabs>
          </div>
          <br />
          <Divider my="md" />
        </div>
      }
    />
  );
};
export default Film;
