import { GenreModel } from "@/infraestructure/models/Genre";
import { ResourceModel } from "@/utils/Models";
import { Card as MantineCard } from "@mantine/core";
import { Image, Text, Badge, Button, Group } from "@mantine/core";

interface CardProps {
  title: string;
  text: string;
  genre?: string;
  href: string;
  image?: string;
}

const Card = ({ title, text, genre, href, image }: CardProps) => {
  return (
    <MantineCard
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{ width: "100%" }}
    >
      {image && (
        <MantineCard.Section>
          <Image src={image} height={"100%"} alt={"image.alt"} />
        </MantineCard.Section>
      )}

      <Group justify="center" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
        <Badge>{genre}</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {text}
      </Text>

      <Button component="a" href={href} fullWidth mt="md" radius="md">
        Visualizar!
      </Button>
    </MantineCard>
  );
};
export default Card;
