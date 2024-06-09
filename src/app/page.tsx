"use client";

import styles from "./Home.module.scss";
import { Button, Text, Title } from "@mantine/core";
import {
  CrazyGirl,
  GroupChat,
  PopCorn,
  SurpriseGirl,
  ThinkKid,
} from "../../public/resources";
import Accordion from "@/components/shared/Accordion/Accordion";
import { AccordionItemType } from "@/components";
import { TextInputButton } from "@/components/shared/Text-Input-Button";
import { FAQ, TitleMapDD } from "@/testing/DumbData";

export default function Home() {
  return (
    <div className={styles.films}>
      <section className={styles.title}>
        <div className={styles.title_top}>
          <Title order={1}>
            DISFRUTA DEL MEJOR CINE Y LAS MEJORES SERIES INDEPENDIENTES
          </Title>
          <Title order={2}>No sabes lo que te espera 🔍 </Title>
        </div>
        <TextInputButton
          titleText={"Empieza a disfrutar GRATIS de historias independientes"}
          buttonText={"Descubrir"}
          placeholder="Dirección de correo"
          link={"/auth/sign-up"}
        />
        <br />
      </section>
      <div className={styles.bottom}>
        <PopCorn />
        <div className={styles.title_bottom_text}>
          {TitleMapDD.map((item) => (
            <Text fw={700} size="xl" fs={"italic"}>
              {item}
            </Text>
          ))}
        </div>
      </div>
      <section className={styles.allDevices}>
        <div className={styles.allDevices_icon}>
          <ThinkKid />
        </div>

        <div className={styles.allDevices_text}>
          <Title size={60}>
            Puedes ver cortos de un artista de un pueblo de Toledo donde te
            plazca
          </Title>
          <Text fs={"italic"} size="xl">
            GRETA es una plataforma de straming que ofrece la oportunidad a
            artistas independientes de contar sus historias
          </Text>
          <Button size="lg" component="a" href="auth/sign-up">
            🪬 Adéntrate en lo desconocido 🪬
          </Button>
        </div>
      </section>

      <section className={styles.genres}>
        <div className={styles.genres_text}>
          <Title size={60}>
            Infinidad de géneros e historias, el límite es ... bueno realmente
            no hay limite
          </Title>
          <Text fs={"italic"} size="xl">
            GRETA es una plataforma de straming que ofrece la oportunidad a
            artistas independientes de contar sus historias
          </Text>
          <Button size="lg" component="a" href="auth/sign-up">
            🫂 Enamórate del cine independiente 🫂
          </Button>
        </div>
        <div className={styles.genres_icon}>
          <GroupChat />
        </div>
      </section>

      <section className={styles.donate}>
        <div className={styles.donate_icon}>
          <SurpriseGirl />
        </div>
        <div className={styles.donate_text}>
          <Title size={60}>
            Apoya y recompensa a quien te haya hecho sentir con sus movidas
          </Title>
          <Text fs={"italic"} size="xl">
            GRETA ofrece a los creadores ser financiados directamente por los
            consumidores de su servicio. asdi que, si piensas que alguien se lo
            merece <strong>¡DONA A TU CREADOR FAV!</strong>
          </Text>
        </div>
      </section>

      <section className={styles.faq}>
        <Title order={2}>Preguntas frecuentes</Title>
        <Title order={2}>aka</Title>
        <Title order={2}>FAQ</Title>

        <div className={styles.faq_content}>
          <div className={styles.faq_content_svg}>
            {" "}
            <CrazyGirl />
          </div>
          <div className={styles.faq_content_accordion}>
            <Accordion items={FAQ} variant={"separated"} />
          </div>
        </div>
      </section>

      <div className={styles.botomCTA}>
        <TextInputButton
          titleText={"Empieza a disfrutar GRATIS de historias independientes"}
          buttonText={"Descubrir"}
          placeholder="Dirección de correo"
          link={"/auth/sign-up"}
        />
      </div>
    </div>
  );
}
