"use client";

import { UserCardImage } from "@/components/shared/UserCardImage";
import styles from "./Dashboard.module.scss";
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
} from "../../../app/auth/sign-up/avatars";
import { Button, Drawer, Modal } from "@mantine/core";
import { useEffect, useState } from "react";
import FilmsTable from "@/components/shared/FilmsTable/FilmsTable";
import UpdateUserForm from "./components/UpdateUserForm/UpdateUserForm";
import UploadFilmForm from "./components/UploadFilmForm/UploadFilmForm";
import UpdateFilmForm from "./components/UpdateFilmForm/UpdateFilmForm";
import AuthGuard from "@/components/shared/AuthGuard/AuthGuard";
import { UserModel } from "@/infraestructure/models/User";
import { FilmModel } from "@/infraestructure/models/Film";
import DeleteAccountForm from "./components/DeleteAccountForm/DeleteAccountForm";

const DashboardPage = () => {
  const [userData, setUserData] = useState<UserModel>();
  const [userFilms, setUserFilms] = useState<FilmModel[]>([
    {
      id: "",
      id_user: "",
      route: "",
      title: "",
      descript: "",
      genre: "",
      poster: "",
      views: 0,
      rating: 0,
      comments: [],
      director: "",
      art: "",
      sound: "",
      actors: "",
    },
  ]);
  const selectImage = (id: string) => {
    if (id === "1") return avatar1;
    if (id === "2") return avatar2;
    if (id === "3") return avatar3;
    if (id === "4") return avatar4;
    if (id === "5") return avatar5;
    if (id === "6") return avatar6;
  };
  const [opened, setOpened] = useState({
    updateUser: false,
    updateFilm: false,
    uploadNewFilm: false,
    deletedAccount: false,
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
      .catch((error) => {});

    fetch(
      `http://localhost:3010/user/dashboard/films/${localStorage.getItem(
        "user_id"
      )!}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setUserFilms(data);
      })
      .catch((error) => {});
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

  return (
    <AuthGuard
      children={
        <div className={styles.dashboard}>
          <div className={styles.dashboard_user}>
            <UserCardImage
              onClick={() => setOpened({ ...opened, updateUser: true })}
              name={userData?.username || ""}
              email={userData?.email || ""}
              loginDate={parseDate(userData?.created_at) || ""}
              filmsUploaded={0}
              views={0}
              avatar={
                selectImage(localStorage.getItem("avatar") || "1") || avatar1
              }
            />
          </div>

          <div className={styles.dashboard_table}>
            <Button
              onClick={() => setOpened({ ...opened, uploadNewFilm: true })}
            >
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
            <Button
              onClick={() => setOpened({ ...opened, deletedAccount: true })}
            >
              Borrar cuenta
            </Button>
            <UpdateUserForm />
          </Modal>
          <Modal
            opened={opened.deletedAccount}
            onClose={() => setOpened({ ...opened, deletedAccount: false })}
          >
            <DeleteAccountForm />
          </Modal>
          <Modal
            size={"xl"}
            opened={opened.updateFilm}
            onClose={() => setOpened({ ...opened, updateFilm: false })}
          >
            <UpdateFilmForm />
          </Modal>
        </div>
      }
    ></AuthGuard>
  );
};

export default DashboardPage;
