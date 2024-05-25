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
import { IconAt, IconLock } from "@tabler/icons-react";
import { UserModel } from "@/infraestructure/models/User";
import { handleUpdateSubmit } from "./actions/useUpdateUser";
import { Footer } from "@/components/Footer";
import FilmsTable from "@/components/shared/FilmsTable/FilmsTable";
import { FilmModel } from "@/infraestructure/models/Film";
import { FilmsTestValues } from "@/testing/DumbData";
import UpdateForm from "./components/UpdateUserForm/UpdateUserForm";
import UpdateFilmForm from "./components/UpdateFilmForm/UpdateFilmForm";

const DashboardPage = () => {
  const [openedDrawer, setOpenedDrawer] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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
          <UserCardImage infoUser={[]} onClick={() => setOpenModal(true)} />
        </div>

        <div className={styles.dashboard_table}>
          <Button onClick={() => setOpenedDrawer(true)}>Subir pelicula</Button>
          <FilmsTable
            userFilms={FilmsTestValues}
            onClickTable={() => alert("editar")}
          />
          <Drawer
            opened={openedDrawer}
            onClose={() => setOpenedDrawer(false)}
            position="bottom"
            size={"100%"}
          >
            <UpdateFilmForm />
          </Drawer>
        </div>

        <Modal opened={openModal} onClose={() => setOpenModal(false)}>
          <UpdateForm />
        </Modal>
      </div>
    </>
  );
};

export default DashboardPage;
