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

const AvatarMenu = ({ ...props }: AvatarMenuProps) => {
  return (
    <Menu {...props}>
      <Menu.Target>
        <Avatar className={styles.avatarMenu_avatar} />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>{"GRETA <3"}</Menu.Label>
        <Menu.Item
          leftSection={<IconUser style={{ width: rem(14), height: rem(14) }} />}
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
        >
          {"Salir de Greta :("}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
export default AvatarMenu;
