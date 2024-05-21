"use client";

import { Avatar, Menu, rem } from "@mantine/core";

import styles from "./AvatarMenu.module.scss";
import { AvatarMenuProps } from "./AvatarMenu.types";
import Link from "next/link";

const AvatarMenu = ({ options, ...props }: AvatarMenuProps) => {
  return (
    <Menu {...props}>
      <Menu.Target>
        <Avatar className={styles.avatarMenu_avatar} />
      </Menu.Target>

      <Menu.Dropdown>
        {options?.map((option) => (
          <Menu.Item leftSection={option.icon && option.icon}>
            {option.link ? (
              <Link href={option.link}>{option.label}</Link>
            ) : (
              <span>{option.label}</span>
            )}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};
export default AvatarMenu;
