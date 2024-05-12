import { GretaText, HomeHeader, SectionTittle } from "@/components";
import Footer from "@/components/Footer/Footer";
import SectionAllDevices from "@/components/Home/SectionAllDevices/SectionAllDevices";

const GretaApp = () => {
  return (
    <div style={{ width: "100%" }}>
      <HomeHeader />
      <SectionTittle />
      <SectionAllDevices />
      <GretaText content={"Home!"} variant={"title"} color={"dark"}></GretaText>
      <Footer />
    </div>
  );
};
export default GretaApp;
