import Card from "@/components/shared/Card/Card";
import Carousel from "@/components/shared/Carousel/Carousel";
import FeaturedMovie from "@/components/shared/FeaturedMovie/FeaturedMovie";
import { CarouselDD, HotelBudapestDD } from "@/testing/DumbData";
import styles from "./Films.module.scss";
import { Title } from "@mantine/core";
import AuthGuard from "@/components/shared/AuthGuard/AuthGuard";
import FilmsFeed from "./components/FilmsFeed";
import { Suspense } from "react";
import { FilmModel } from "@/infraestructure/models/Film";

const Films = async () => {
  const response: FilmModel[] = await fetch("http://localhost:3010/films", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  console.log(response);

  return (
    <>
      <Carousel title="Tu videoclub" items={CarouselDD} />
      <Suspense>
        {response.map((item) => (
          <p>{item.title}</p>
        ))}
      </Suspense>
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
        <Carousel title="Las mejores peliculas de miedo" items={CarouselDD} />
        <Carousel title="Tu videoclub" items={CarouselDD} />
        <Carousel title="Las mejores peliculas de miedo" items={CarouselDD} />
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
        <Carousel title="Las mejores peliculas de miedo" items={CarouselDD} />
      </section>
      <section className={styles.cards}>
        <div className={styles.container} style={{}}>
          <Title className={styles.wakala}>Nuestra selección de hoy</Title>
          <Title className={styles.wakala}>Nuestra selección de hoy</Title>
          <Title className={styles.wakala}>Nuestra selección de hoy</Title>
        </div>
        <Suspense>
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
        </Suspense>
      </section>
    </>
  );
};

export default Films;
