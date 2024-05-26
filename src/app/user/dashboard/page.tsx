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
import { useState } from "react";
import { UserModel } from "@/infraestructure/models/User";
import FilmsTable from "@/components/shared/FilmsTable/FilmsTable";

import { FilmsTestValues } from "@/testing/DumbData";
import UpdateUserForm from "./components/UpdateUserForm/UpdateUserForm";
import UpdateFilmForm from "./components/UploadFilmForm/UploadFilmForm";
import UploadFilmForm from "./components/UploadFilmForm/UploadFilmForm";

const DashboardPage = () => {
  const [opened, setOpened] = useState({
    updateUser: false,
    updateFilm: false,
    uploadNewFilm: false,
  });
  //estos datos me vendrán de servidor
  const [newUserValues, setNewUsersValues] = useState<UserModel>({
    id: "",
    email: "",
    user: "",
    passOne: "",
    passTwo: "",
  });

  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.dashboard_user}>
          <UserCardImage
            infoUser={[]}
            onClick={() => setOpened({ ...opened, updateUser: true })}
          />
        </div>

        <div className={styles.dashboard_table}>
          <Button onClick={() => setOpened({ ...opened, uploadNewFilm: true })}>
            Subir pelicula
          </Button>
          <FilmsTable
            userFilms={FilmsTestValues}
            onClickTable={() => setOpened({ ...opened, updateFilm: true })}
          />
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
          opened={opened.updateFilm}
          onClose={() => setOpened({ ...opened, updateFilm: false })}
        >
          <UpdateFilmForm />
        </Modal>
      </div>
    </>
  );
};

export default DashboardPage;
