import { Button } from "@mantine/core";
import styles from "./FeaturedMovie.module.scss";
import { FeaturedMovieProps } from "./FeaturedMovie.types";

const FeaturedMovie = ({
  title = "https://www.w3schools.com/html/img_chania.jpg",
  award,
  description,
  href,
  poster,
}: FeaturedMovieProps) => {
  return (
    <div className={styles.featuredMovie}>
      <div className={styles.featuredMovie_poster}>
        <img src={poster.src} alt={poster.alt} />
      </div>
      <div className={styles.featuredMovie_text}>
        <span className={styles.featuredMovie_text_award}>
          {/* most streamed on month */}
          {award}
        </span>
        <span className={styles.featuredMovie_text_title}>{title}</span>
        <div className={styles.control}>
          <p className={styles.featuredMovie_text_description}>{description}</p>
        </div>

        <Button
          component="a"
          href={`/films/${href}`}
          size="compact-lg"
          variant="subtle"
        >
          Necesito verla ya!
        </Button>
      </div>
    </div>
  );
};
export default FeaturedMovie;
