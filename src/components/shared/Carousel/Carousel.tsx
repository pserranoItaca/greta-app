"use client";

import { Carousel as MantineCarousel } from "@mantine/carousel";
import styles from "./Carousel.module.scss";
import Image from "next/image";
import { Title } from "@mantine/core";
import { CarouselProps } from "./Carousel.types";
import Link from "next/link";
import { Text } from "@mantine/core";

const Carousel = ({ items, title }: CarouselProps) => {
  console.log(items);
  return (
    <div className={styles.carousel}>
      <Text className={styles.carousel_title}>{title}</Text>
      <MantineCarousel
        withIndicators={false}
        withControls={false}
        height="140"
        slideSize="260"
        loop
        align="start"
        slidesToScroll={3}
        classNames={{
          slide: styles.slide,
          root: styles.root,
          viewport: styles.viewport,
        }}
      >
        {items.map((item) => (
          <MantineCarousel.Slide component={"a"}>
            {/* <p className={styles.carousel_filmTitle}>{item.title}</p> */}
            <a href={`/films/${item.id}`}>
              <img
                // src={`http://localhost:3010/films/resource/poster/${item.id}.png`}
                src={item.poster}
                alt="The Grand Budapest Hotel Poster"
              />
            </a>
          </MantineCarousel.Slide>
        ))}
      </MantineCarousel>
    </div>
  );
};
export default Carousel;
