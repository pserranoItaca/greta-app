"use client";

import { Carousel as MantineCarousel } from "@mantine/carousel";
import styles from "./Carousel.module.scss";
import { Title } from "@mantine/core";

const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <Title className={styles.carousel_title}>peliculas!</Title>
      <MantineCarousel
        withIndicators={false}
        withControls={false}
        height={200}
        slideSize="300px"
        slideGap="lg"
        loop
        align="start"
        slidesToScroll={3}
        classNames={{ slide: styles.slide, root: styles.root }}
      >
        <MantineCarousel.Slide>1</MantineCarousel.Slide>
        <MantineCarousel.Slide>2</MantineCarousel.Slide>
        <MantineCarousel.Slide>3</MantineCarousel.Slide>
        <MantineCarousel.Slide>1</MantineCarousel.Slide>
        <MantineCarousel.Slide>2</MantineCarousel.Slide>
        <MantineCarousel.Slide>3</MantineCarousel.Slide>
      </MantineCarousel>
    </div>
  );
};
export default Carousel;
