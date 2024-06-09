"use client";

import { Avatar, Menu, rem } from "@mantine/core";

import styles from "./AvatarMenu.module.scss";
import { AvatarMenuProps } from "./AvatarMenu.types";
import Link from "next/link";
import {
  IconUser,
  IconSettings,
  IconDoorExit,
  IconUpload,
} from "@tabler/icons-react";
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
} from "../../../app/auth/sign-up/avatars";
import Image from "next/image";

const AvatarMenu = ({ ...props }: AvatarMenuProps) => {
  const selectImage = (id: string) => {
    if (id === "1") return avatar1;
    if (id === "2") return avatar2;
    if (id === "3") return avatar3;
    if (id === "4") return avatar4;
    if (id === "5") return avatar5;
    if (id === "6") return avatar6;
  };
  const exitGreta = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    window.location.href = "/";
  };

  if (localStorage.getItem("user")) {
    return (
      <Menu {...props}>
        <Menu.Target>
          <Image
            width={50}
            height={50}
            style={{
              borderRadius: "50%",
              border: "solid black 1px",
            }}
            src={selectImage(localStorage.getItem("avatar") || "4") || avatar4}
            alt=""
            className={styles.avatarMenu_avatar}
          />
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>{"GRETA <3"}</Menu.Label>
          <Menu.Item
            leftSection={
              <IconUser style={{ width: rem(14), height: rem(14) }} />
            }
          >
            <Link
              className={styles.link}
              href={"http://localhost:3000/user/dashboard"}
            >
              Usuario
            </Link>
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconSettings style={{ width: rem(14), height: rem(14) }} />
            }
          >
            <Link
              className={styles.link}
              href={"http://localhost:3000/user/dashboard"}
            >
              Ajustes
            </Link>
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconUpload style={{ width: rem(14), height: rem(14) }} />
            }
          >
            <Link
              className={styles.link}
              href={"http://localhost:3000/user/dashboard"}
            >
              Subir contenido
            </Link>
          </Menu.Item>

          <Menu.Divider />

          <Menu.Item
            color="red"
            leftSection={
              <IconDoorExit style={{ width: rem(14), height: rem(14) }} />
            }
            onClick={() => exitGreta()}
          >
            {"Salir de Greta :("}
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    );
  }
};
export default AvatarMenu;
