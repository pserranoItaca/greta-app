import { Carousel, FeaturedMovie, Footer } from "@/components";
import FilmsHeader from "./components/FilmsHeader/FilmsHeader";
import Gallery from "@/components/shared/Gallery/Gallery";
import { CarouselDD } from "@/testing/DumbData";
import styles from "./Films.module.scss";

const Films = () => {
  return (
    <>
      <FilmsHeader />
      <section className={styles.topCarousels}>
        <Carousel title="Las mejores peliculas de miedo" items={CarouselDD} />
        <Carousel title="Tu videoclub" items={CarouselDD} />
        <Carousel title="Las mejores peliculas de miedo" items={CarouselDD} />
      </section>

      {/* <Gallery images={testImages} /> */}
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
