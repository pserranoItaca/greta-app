"use client";

import Image from "next/image";
import styles from "./Home.module.scss";
import { Footer, TextInputButton } from "@/components";
import { Button, Text, Title } from "@mantine/core";
import { logo } from "../../public/brand";
import { Suspense } from "react";
import {
  CrazyGirl,
  GroupChat,
  PopCorn,
  SurpriseGirl,
  ThinkKid,
  bobComputer,
} from "../../public/resources";
import Accordion from "@/components/shared/Accordion/Accordion";

export default function Home() {
  const groceries: AccordionItemType[] = [
    {
      icon: "🍎",
      value: "Apples",
      description:
        "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
    },
    {
      icon: "🍌",
      value: "Bananas",
      description:
        "Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.",
    },
    {
      icon: "🥦",
      value: "Broccoli",
      description:
        "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
    },
  ];
  const titleMap = [
    "Disfruta GRATIS de todo el catálogo de GRETA",
    "Disfruta GRATIS de todo el catálogo de GRETA",
    "Disfruta GRATIS de todo el catálogo de GRETA",
  ];

  return (
    <>
      <section className={styles.header}>
        <Suspense>
          <Image
            src={logo.default.src}
            className={styles.header_logo}
            alt={"GRETA!"}
            width={200}
            height={80}
          />

          <Button
            variant="filled"
            size="compact-xl"
            className={styles.header_button}
          >
            Iniciar sesion
          </Button>
        </Suspense>
      </section>
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
          onChange={(e) => localStorage.setItem("email", e.target.value)}
        />
        <br />
      </section>
      <div className={styles.bottom}>
        <PopCorn />
        <div className={styles.title_bottom_text}>
          {titleMap.map((item) => (
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
          <Button size="lg" component="a" href="auth/login">
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
          <Button size="lg" component="a" href="auth/login">
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
        <Title order={2}>Preguntas precuentes</Title>
        <Title order={2}>AKA</Title>
        <Title order={2}>FAAAAAAQ</Title>
        <div className={styles.faq_accSvg}>
          <Accordion items={groceries} variant={"separated"} />
          <div className={styles.faq_accSvg_crazy}>
            <CrazyGirl />
          </div>
        </div>
      </section>
      <div className={styles.botomCTA}>
        <TextInputButton
          titleText={"Empieza a disfrutar GRATIS de historias independientes"}
          buttonText={"Descubrir"}
          placeholder="Dirección de correo"
          link={"/auth/sign-up"}
          onChange={(e) => localStorage.setItem("email", e.target.value)}
        />
      </div>

      <Footer />
    </>
  );
}
