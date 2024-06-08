"use client";

import Image from "next/image";
import styles from "./FilmsHeader.module.scss";
import Link from "next/link";
import { logo } from "../../../public/brand";
import AvatarMenu from "@/components/shared/AvatarMenu/AvatarMenu";
import { Button, Menu } from "@mantine/core";
import { FilmGenresTypedDD } from "@/testing/DumbData";
import { GenreModel } from "@/infraestructure/models/Genre";
import { useState } from "react";

const FilmsHeader = () => {
  const genres: GenreModel[] = FilmGenresTypedDD;
  const test = genres[1].genre.split(" ")[1].toLocaleLowerCase();

  return (
    <>
      <div className={styles.menu}>
        <Image
          className={styles.image}
          src={logo}
          alt={""}
          width={160}
          height={70}
        ></Image>

        <div className={styles.menu_links}>
          <Link target="_blank" href={"/"}>
            Inicio
          </Link>
          <Link target="_blank" href={"/films"}>
            Peliculas
          </Link>

          <Link href={"/user/videoclub"}>Mi videoclub</Link>

          <Menu trigger="click">
            <Menu.Target>
              <Button variant="outline">Categorias</Button>
            </Menu.Target>
            <Menu.Dropdown>
              {genres.map((genre) => (
                <Menu.Item key={genre.id}>
                  <Link
                    target="_blank"
                    style={{ textDecoration: "none", color: "black" }}
                    href={`/films/category/${genre.route}`}
                  >
                    {genre.genre}
                  </Link>
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        </div>
        {localStorage.getItem("user") ? (
          <AvatarMenu />
        ) : (
          <Button component="a" href="/auth/login" target="_blank">
            Acceder
          </Button>
        )}
      </div>
    </>
  );
};
export default FilmsHeader;
