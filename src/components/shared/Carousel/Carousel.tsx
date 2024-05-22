"use client";

import { Carousel as MantineCarousel } from "@mantine/carousel";
import styles from "./Carousel.module.scss";
import Image from "next/image";
import { Title } from "@mantine/core";
import { CarouselProps } from "./Carousel.types";
import Link from "next/link";

const Carousel = ({ items }: CarouselProps) => {
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
        {items.map((item) => (
          <MantineCarousel.Slide>
            <div>
              <Link href={""}>
                <Image src={""} alt={""} />
              </Link>
            </div>
          </MantineCarousel.Slide>
        ))}
      </MantineCarousel>
    </div>
  );
};
export default Carousel;
