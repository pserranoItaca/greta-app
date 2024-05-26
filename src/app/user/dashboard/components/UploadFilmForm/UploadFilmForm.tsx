import {
  Button,
  MultiSelect,
  Tabs,
  TagsInput,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import styles from "./UploadFilmForm.module.scss";
import {
  IconEyeQuestion,
  IconArchive,
  IconBrandTeams,
} from "@tabler/icons-react";
import { FormEvent, useState } from "react";
import { FilmGenres } from "@/testing/DumbData";

type UploadType = {
  title: string;
  genres: string[];
  description: string;
};

const UploadFilmForm = () => {
  const [info, setInfo] = useState<UploadType>({
    title: "",
    description: "",
    genres: [],
  });

  const habdleSubmit = (e: FormEvent<HTMLFormElement>, info: UploadType) => {
    e.preventDefault();
    console.log(info);
    alert("enviado");
  };
  return (
    <div className={styles.form}>
      <Title className={styles.title}>Estamos deseando ver tu creación</Title>
      <Title className={styles.subtitle}>
        pero antes debemos saber una serie de cosas...
      </Title>
      <form className={styles.form} onSubmit={(e) => habdleSubmit(e, info)}>
        <Tabs
          defaultValue={"general"}
          classNames={{ root: styles.root, panel: styles.panel }}
        >
          <Tabs.List>
            <Tabs.Tab value="general" leftSection={<IconEyeQuestion />}>
              Hablanos de tu obra...
            </Tabs.Tab>
            <Tabs.Tab value="people" leftSection={<IconBrandTeams />}>
              ¿Quien ha participado?
            </Tabs.Tab>
            <Tabs.Tab value="uploads" leftSection={<IconArchive />}>
              Compártenos el contenido
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="general">
            <TextInput
              leftSectionPointerEvents="none"
              label="Titulo de tu obra"
              placeholder="Titulo de tu obra"
              onChange={(e) => setInfo({ ...info, title: e.target.value })}
              name="title"
              required
            />

            <Textarea
              leftSectionPointerEvents="none"
              label="¿De que trata tu obra?"
              placeholder="Descripción de tu creación"
              name="user"
              onChange={(e) => setInfo({ ...info, title: e.target.value })}
              autosize
              required
            />
            <MultiSelect
              label="Selecciona los géneros de tu obra"
              placeholder="Selecciona los géneros de tu obra"
              data={FilmGenres}
            ></MultiSelect>
          </Tabs.Panel>
          <Tabs.Panel value="uploads">Gallery tab content</Tabs.Panel>
          <Tabs.Panel value="people">
            <TextInput
              leftSectionPointerEvents="none"
              label="Director"
              placeholder="Director"
              name="director"
            />{" "}
            <TextInput
              leftSectionPointerEvents="none"
              label="Director de arte"
              placeholder="Director de arte"
              name="art"
            />{" "}
            <TextInput
              leftSectionPointerEvents="none"
              label="Director de sonido"
              placeholder="Director de sonido"
              name="sound"
            />
          </Tabs.Panel>
        </Tabs>
        <Button variant="filled" size="lg" type="submit">
          Subir película
        </Button>
      </form>
    </div>
  );
};
export default UploadFilmForm;
