"use client";

import { Card, Avatar, Text, Group, Button, em } from "@mantine/core";
import styles from "./UserCardImage.module.scss";
import { UserCardImageProps } from "./UserCardImage.types";
import Image from "next/image";

export function UserCardImage({
  email,
  name,
  avatar,
  loginDate,
  filmsUploaded,
  views,
  onClick,
}: UserCardImageProps) {
  return (
    <Card withBorder padding="xl" radius="md" className={styles.card}>
      <Card.Section
        h={100}
        style={{
          background: "#bd6464",
        }}
      />
      <Image
        width={150}
        height={150}
        style={{
          borderRadius: "50%",
          border: "solid black 1px",
          marginTop: "5px",
          margin: "auto",
        }}
        src={avatar}
        alt=""
        className={styles.avatar}
      />
      <Text ta="center" fz="lg" fw={500} mt="sm">
        {name}
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        {email}
      </Text>
      <Group mt="md" justify="center" gap={30}>
        <div>
          <Text ta="center" fz="lg" fw={500}>
            {loginDate}
          </Text>
          <Text ta="center" fz="sm" c="dimmed" lh={1}>
            Fecha de registro
          </Text>
        </div>
      </Group>
      <Button
        fullWidth
        onClick={onClick}
        radius="md"
        mt="xl"
        size="md"
        variant="default"
      >
        Editar perfil
      </Button>
    </Card>
  );
}
