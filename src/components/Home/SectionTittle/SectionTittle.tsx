import { GretaText, TextInputButton } from "@/components";
import { Box, Container } from "@mui/material";
import PopCorn from "@/components/icons/PopCorn";
import styles from "./SectionTittle.module.scss";
import Link from "next/link";

const SectionTitle = () => {
  const mapText = [
    "Disfruta totalmente GRATIS del todo el catálogo de GRETA >",
    "Disfruta totalmente GRATIS del todo el catálogo de GRETA >",
    "Disfruta totalmente GRATIS del todo el catálogo de GRETA >",
  ];
  return (
    <>
      <Box sx={{ display: "flex" }} className={styles.general}>
        <Box className={styles.general_text}>
          <GretaText
            content={
              "DISFRUTA DEL MEJOR CINE Y LAS MEJORES SERIES INDEPENDIENTES"
            }
            variant={"title"}
            color={"light"}
          />
          <GretaText
            content={"No sabes lo que te espera :)"}
            variant={"subtitle"}
            color={"light"}
          />
        </Box>
        <Box className={styles.general_email}>
          <TextInputButton
            textVariant="subtitle"
            placeholder="Dirección de correo"
            href="./login"
            textButton="Descubrir >"
            title="¡Empieza a disfrutar GRATIS de historias independientes!"
            textColor={"dark"}
            variant={"outlined"}
          />
        </Box>
      </Box>
      <Box className={styles.popcorn}>
        <Box className={styles.popcorn_icon}>
          <PopCorn />
        </Box>
        <Box className={styles.popcorn_text}>
          {mapText.map((item, index) => (
            <Link className={styles.popcorn_text_link} href={""} key={index}>
              {item}
            </Link>
          ))}
        </Box>
      </Box>
    </>
  );
};
export default SectionTitle;
