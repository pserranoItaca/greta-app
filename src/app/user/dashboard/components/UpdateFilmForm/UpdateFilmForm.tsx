import { Tabs } from "@mantine/core";
import styles from "./UpdateFilmForm.module.scss";

const UpdateFilmForm = () => {
  return (
    <form className={styles.form}>
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
  );
};
export default UpdateFilmForm;
