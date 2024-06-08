"use client";

import { Card, Avatar, Text, Group, Button, em } from "@mantine/core";
import styles from "./UserCardImage.module.scss";
import { UserCardImageProps } from "./UserCardImage.types";

export function UserCardImage({
  email,
  name,
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
      <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
        size={120}
        radius={120}
        mx="auto"
        mt={-30}
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
            {views}
          </Text>
          <Text ta="center" fz="sm" c="dimmed" lh={1}>
            Visualizaciones totales
          </Text>
        </div>{" "}
        <div>
          <Text ta="center" fz="lg" fw={500}>
            {filmsUploaded}
          </Text>
          <Text ta="center" fz="sm" c="dimmed" lh={1}>
            Peliculas subidas
          </Text>
        </div>{" "}
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
