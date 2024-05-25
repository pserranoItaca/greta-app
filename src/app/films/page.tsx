"use client";

import FilmsHeader from "../../components/FilmsHeader/FilmsHeader";
import Gallery from "@/components/shared/Gallery/Gallery";
import { CarouselDD, GalleryDD } from "@/testing/DumbData";
import styles from "./Films.module.scss";
import Carousel from "@/components/shared/Carousel/Carousel";
import FeaturedMovie from "@/components/shared/FeaturedMovie/FeaturedMovie";
import { Footer } from "@/components/Footer";

const Films = () => {
  return (
    <>
      {/* <section className={styles.topGallery}>
        <Gallery posters={GalleryDD} />
      </section> */}

      <section className={styles.topCarousels}>
        <Carousel title="Las mejores peliculas de miedo" items={CarouselDD} />
        <Carousel title="Tu videoclub" items={CarouselDD} />
        <Carousel title="Las mejores peliculas de miedo" items={CarouselDD} />
      </section>

      <section className={styles.featuredFilms}>
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
          description={
            "A  film about friendship and drugs like Trainspoitting but in spanish"
          }
          poster={{
            src: "https://www.w3schools.com/html/img_chania.jpg",
            alt: "alt",
          }}
        />
        <FeaturedMovie
          title={"Criando ratas"}
          award={"most stramed this month"}
          description={
            "A  film about friendship and drugs like Trainspoitting but in spanish"
          }
          poster={{
            src: "https://www.w3schools.com/html/img_chania.jpg",
            alt: "alt",
          }}
        />
      </section>
      <Footer />
    </>
  );
};
export default Films;
