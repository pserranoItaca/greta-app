import { Tabs, TextInput, Title } from "@mantine/core";
import styles from "./UpdateFilmForm.module.scss";
import {
  IconEyeQuestion,
  IconArchive,
  IconBrandTeams,
} from "@tabler/icons-react";
import PillsInput from "@/components/shared/PillsInput/PillsInput";

const UpdateFilmForm = () => {
  return (
    <div className={styles.form}>
      <form className={styles.form} action="">
        <Title className={styles.title}>Estamos deseando ver tu creación</Title>
        <Title className={styles.subtitle}>
          pero antes debemos saber una serie de cosas...
        </Title>
        <Tabs defaultValue={"general"}>
          {" "}
          <Tabs.List>
            <Tabs.Tab value="general" leftSection={<IconEyeQuestion />}>
              Hablanos de tu obra...
            </Tabs.Tab>
            <Tabs.Tab value="uploads" leftSection={<IconArchive />}>
              Compártenos el contenido
            </Tabs.Tab>
            <Tabs.Tab value="people" leftSection={<IconBrandTeams />}>
              ¿Quien ha participado?
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="general" className={styles.panel_general}>
            <TextInput
              leftSectionPointerEvents="none"
              label="Titulo de tu obra"
              placeholder="Titulo de tu obra"
              classNames={{ root: styles.root }}
              name="title"
              required
            />
            <PillsInput></PillsInput>

            <TextInput
              type="text"
              leftSectionPointerEvents="none"
              label="¿De que trata tu obra?"
              placeholder="Descripción de tu creación"
              classNames={{ root: styles.root }}
              name="user"
              required
            />
          </Tabs.Panel>
          {/* <Tabs.Panel value="uploads">Gallery tab content</Tabs.Panel>
      <Tabs.Panel value="people">Gallery tab content</Tabs.Panel> */}
        </Tabs>
      </form>
    </div>
  );
};
export default UpdateFilmForm;
