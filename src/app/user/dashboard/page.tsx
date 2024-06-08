"use client";

import { UserCardImage } from "@/components/shared/UserCardImage";
import styles from "./Dashboard.module.scss";
import FilmsHeader from "@/components/FilmsHeader/FilmsHeader";
import {
  Button,
  Drawer,
  Modal,
  PasswordInput,
  TextInput,
  Title,
} from "@mantine/core";
import { Suspense, useEffect, useState } from "react";
import FilmsTable from "@/components/shared/FilmsTable/FilmsTable";
import { FilmsTestValues } from "@/testing/DumbData";
import UpdateUserForm from "./components/UpdateUserForm/UpdateUserForm";
import UploadFilmForm from "./components/UploadFilmForm/UploadFilmForm";
import UpdateFilmForm from "./components/UpdateFilmForm/UpdateFilmForm";
import AuthGuard from "@/components/shared/AuthGuard/AuthGuard";
import useUserInfo from "./actions/useUserInfo";
import { UserModel } from "@/infraestructure/models/User";
import { FilmModel } from "@/infraestructure/models/Film";
import { type } from "os";

const DashboardPage = () => {
  const { getUserInfo } = useUserInfo();
  const [userData, setUserData] = useState<UserModel>();
  const [userFilms, setUserFilms] = useState<FilmModel[]>([
    {
      id: 0,
      id_user: "",
      route: "",
      title: "",
      descript: "",
      genre: "",
      poster: { src: "", alt: "" },
      views: 0,
      rating: 0,
      comments: [],
      director: "",
      art: "",
      sound: "",
      actors: "",
    },
  ]);

  const [opened, setOpened] = useState({
    updateUser: false,
    updateFilm: false,
    uploadNewFilm: false,
  });

  useEffect(() => {
    const email = localStorage.getItem("user") || "alice@example.com";
    fetch(`http://localhost:3010/user/dashboard/data/${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching USER data:", error);
      });

    fetch(`http://localhost:3010/user/dashboard/films/${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserFilms(data);
      })
      .catch((error) => {
        console.error("Error fetching FILM data:", error);
      });
  }, []);

  const parseDate = (date: string | undefined) => {
    const dateRAW = userData?.created_at;
    const separatedDate = dateRAW?.split("-");
    if (separatedDate) {
      const dayRAW = separatedDate[2].split("");
      const day = `${dayRAW[0]}${dayRAW[1]}`;

      return `${day}-${separatedDate[1]}-${separatedDate[0]}`;
    }

    return;
  };
  console.log(userFilms);
  console.log(typeof userFilms);
  console.log(userData?.username);

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard_user}>
        <UserCardImage
          onClick={() => setOpened({ ...opened, updateUser: true })}
          name={userData?.username || ""}
          email={userData?.email || ""}
          loginDate={parseDate(userData?.created_at) || ""}
          filmsUploaded={0}
          views={0}
        />
      </div>

      <div className={styles.dashboard_table}>
        <Button onClick={() => setOpened({ ...opened, uploadNewFilm: true })}>
          Subir pelicula
        </Button>

        {userFilms[0] && (
          <FilmsTable
            films={userFilms && userFilms}
            onClickTable={() => setOpened({ ...opened, updateFilm: true })}
          />
        )}

        <Drawer
          opened={opened.uploadNewFilm}
          onClose={() => setOpened({ ...opened, uploadNewFilm: false })}
          position="bottom"
          size={"90%"}
        >
          <UploadFilmForm />
        </Drawer>
      </div>

      <Modal
        opened={opened.updateUser}
        onClose={() => setOpened({ ...opened, updateUser: false })}
      >
        <UpdateUserForm />
      </Modal>
      <Modal
        size={"xl"}
        opened={opened.updateFilm}
        onClose={() => setOpened({ ...opened, updateFilm: false })}
      >
        <UpdateFilmForm />
      </Modal>
    </div>
  );
};

export default DashboardPage;
