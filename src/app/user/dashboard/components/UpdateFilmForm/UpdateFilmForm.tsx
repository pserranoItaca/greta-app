import {
  Button,
  MultiSelect,
  Tabs,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";

import {
  IconBrandTeams,
  IconEyeQuestion,
  IconMapCancel,
} from "@tabler/icons-react";
import styles from "./UpdateFilmForm.module.scss";
import { FilmGenres } from "@/testing/DumbData";
import { useState } from "react";
import { FilmModel } from "@/infraestructure/models/Film";

const UpdateFilmForm = () => {
  //! consulta a servidor para pillar estos datos!!!
  const [currentValues, setCurrentsValues] = useState<FilmModel>();
  return (
    <form className={styles.form}>
      <Title className={styles.title}>¿Qué te apetece modificar?</Title>

      <Tabs
        defaultValue={"general"}
        classNames={{ root: styles.root, panel: styles.panel }}
      >
        <Tabs.List>
          <Tabs.Tab value="general" leftSection={<IconEyeQuestion />}>
            Hablanos de tu obra... d
          </Tabs.Tab>
          <Tabs.Tab value="people" leftSection={<IconBrandTeams />}>
            ¿Quien ha participado?
          </Tabs.Tab>
          <Tabs.Tab color="red" value="delete" leftSection={<IconBrandTeams />}>
            Borrar película
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="general">
          <TextInput
            leftSectionPointerEvents="none"
            label="Titulo de tu obra"
            placeholder="Titulo de tu obra"
            // onChange={(e) => setInfo({ ...info, title: e.target.value })}
            name="title"
            required
          />

          <Textarea
            leftSectionPointerEvents="none"
            label="¿De que trata tu obra?"
            placeholder="Descripción de tu creación"
            name="user"
            // onChange={(e) => setInfo({ ...info, title: e.target.value })}
            autosize
            required
          />
          <MultiSelect
            label="Selecciona los géneros de tu obra"
            defaultValue={[]}
            placeholder="Selecciona los géneros de tu obra"
            data={FilmGenres}
          ></MultiSelect>
        </Tabs.Panel>

        <Tabs.Panel value="delete">
          <Button>Borrar película</Button>
        </Tabs.Panel>
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
      <Button variant="light" size="lg" type="submit">
        Actualizar película
      </Button>
    </form>
  );
};
export default UpdateFilmForm;
