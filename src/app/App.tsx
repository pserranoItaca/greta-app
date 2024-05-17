import { GretaText, HomeHeader, SectionTittle } from "@/components";
import Footer from "@/components/Footer/Footer";
import SectionAllDevices from "@/app/Home/SectionAllDevices/SectionAllDevices";
import { Button } from "@mantine/core";

const GretaApp = () => {
  return (
    <div style={{ width: "100%" }}>
      <Button>Hola mundo!</Button>
      {/* <HomeHeader />
      <SectionTittle />
      <SectionAllDevices />
      <GretaText content={"Home!"} variant={"title"} color={"dark"}></GretaText>
      <Footer /> */}
    </div>
  );
};
export default GretaApp;
