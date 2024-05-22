import { Carousel } from "@/components";
import FilmsHeader from "./components/FilmsHeader/FilmsHeader";
import Gallery from "@/components/shared/Gallery/Gallery";
import { CarouselDD } from "@/testing/DumbData";

const Films = () => {
  return (
    <>
      <FilmsHeader />
      <Carousel items={CarouselDD}></Carousel>
      {/* <Gallery images={testImages} /> */}
    </>
  );
};
export default Films;
