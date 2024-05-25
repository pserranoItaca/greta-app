import { ResourceModel } from "@/utils/Models";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Gallery.module.scss";

interface GalleryProps {
  posters: ResourceModel[];
}

const Gallery = ({ posters }: GalleryProps) => {
  const [index, setIndex] = useState(0);

  const handleInterval = () => {
    if (index < posters.length - 1) {
      setIndex(index + 1);
    }
    if (index == posters.length - 1) setIndex(0);
  };

  // useEffect(() => {
  //   const interval = setInterval(handleInterval, 3500);
  //   return () => clearInterval(interval);
  // }, [, index]);

  return (
    <div className={styles.gallery}>
      <Link href={""}>
        <img
          className={styles.gallery_image}
          src={posters[index].src}
          alt={posters[index].alt}
        />
      </Link>
    </div>
  );
};
export default Gallery;
