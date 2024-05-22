"use client";

import { ResourceModel } from "@/utils/Models";
import { useState } from "react";

interface GalleryProps {
  images: ResourceModel[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [source, setSource] = useState("");

  images.map((image) =>
    setTimeout(() => {
      setSource(image.src);
    }, 2000)
  );

  return (
    <div>
      <img src={source} alt="gallery-item" />
    </div>
  );
};
export default Gallery;
