"use client";

import Card from "@/components/shared/Card/Card";
import Carousel from "@/components/shared/Carousel/Carousel";
import FeaturedMovie from "@/components/shared/FeaturedMovie/FeaturedMovie";
import { CarouselDD, HotelBudapestDD } from "@/testing/DumbData";
import styles from "./Films.module.scss";
import { Title } from "@mantine/core";
import { redirect } from "next/navigation";
import AuthGuard from "@/components/shared/AuthGuard/AuthGuard";

const Films = () => {
  return (
    <AuthGuard
      children={
        <>
          <Carousel title="Tu videoclub" items={CarouselDD} />

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
              title="Las mejores peliculas de miedo"
              items={CarouselDD}
            />
            <Carousel title="Tu videoclub" items={CarouselDD} />
            <Carousel
              title="Las mejores peliculas de miedo"
              items={CarouselDD}
            />
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
          <Carousel title="Las mejores peliculas de miedo" items={CarouselDD} />

          <section>
            <Carousel title="Tu videoclub" items={CarouselDD} />
            <Carousel
              title="Las mejores peliculas de miedo"
              items={CarouselDD}
            />
          </section>
          <section className={styles.cards}>
            <div className={styles.container} style={{}}>
              <Title className={styles.wakala}>Nuestra selección de hoy</Title>
              <Title className={styles.wakala}>Nuestra selección de hoy</Title>
              <Title className={styles.wakala}>Nuestra selección de hoy</Title>
            </div>

            <div style={{ width: "33%" }}>
              <Card
                title={HotelBudapestDD.title}
                text={HotelBudapestDD.description}
                genres={HotelBudapestDD.genres}
                href={HotelBudapestDD.poster.src}
                image={{
                  src: "https://www.w3schools.com/html/pic_trulli.jpg",
                  alt: "alt",
                }}
              />
            </div>
            <div style={{ width: "33%" }}>
              <Card
                title={HotelBudapestDD.title}
                text={HotelBudapestDD.description}
                genres={HotelBudapestDD.genres}
                href={HotelBudapestDD.poster.src}
                image={{
                  src: "https://www.w3schools.com/html/pic_trulli.jpg",
                  alt: "alt",
                }}
              />
            </div>
            <div style={{ width: "33.33%" }}>
              <Card
                title={HotelBudapestDD.title}
                text={HotelBudapestDD.description}
                genres={HotelBudapestDD.genres}
                href={HotelBudapestDD.poster.src}
                image={{
                  src: "https://www.w3schools.com/html/pic_trulli.jpg",
                  alt: "alt",
                }}
              />
            </div>
          </section>
        </>
      }
    />
  );
};

export default Films;
