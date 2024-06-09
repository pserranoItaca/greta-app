import { useRef } from "react";
import {
  Button,
  Group,
  MultiSelect,
  Tabs,
  TagsInput,
  TextInput,
  Textarea,
  Title,
  rem,
} from "@mantine/core";
import styles from "./UploadFilmForm.module.scss";
import {
  IconEyeQuestion,
  IconArchive,
  IconBrandTeams,
  IconCloudUpload,
  IconDownload,
  IconX,
} from "@tabler/icons-react";
import { FormEvent, useState } from "react";
import { FilmGenres } from "@/testing/DumbData";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import theme from "../../../../../../styles/Theme";

type UploadType = {
  title: string;
  genres: string[];
  description: string;
};

const UploadFilmForm = () => {
  const openRef = useRef<() => void>(null);
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
          <Tabs.Panel value="uploads">
            {" "}
            <div className={styles.wrapper}>
              <Dropzone
                openRef={openRef}
                onDrop={() => {}}
                className={styles.dropzone}
                radius="md"
                accept={[MIME_TYPES.mp4]}
                maxSize={30 * 10000 ** 2}
              >
                <div style={{ pointerEvents: "none" }}>
                  <Group justify="center">
                    <Dropzone.Accept>
                      <IconDownload
                        style={{ width: rem(50), height: rem(50) }}
                        stroke={1.5}
                      />
                    </Dropzone.Accept>
                    <Dropzone.Reject>
                      <IconX
                        style={{ width: rem(50), height: rem(50) }}
                        stroke={1.5}
                      />
                    </Dropzone.Reject>
                    <Dropzone.Idle>
                      <IconCloudUpload
                        style={{ width: rem(50), height: rem(50) }}
                        stroke={1.5}
                      />
                    </Dropzone.Idle>
                  </Group>

                  <p style={{ textAlign: "center" }}>
                    Arrastra aqui tu pelicula (solo se admiten mp4)
                  </p>
                </div>
              </Dropzone>

              <Button
                className={styles.control}
                size="md"
                radius="xl"
                onClick={() => openRef.current?.()}
              >
                Select files
              </Button>
            </div>
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
        <Button variant="filled" size="lg" type="submit">
          Subir película
        </Button>
      </form>
    </div>
  );
};
export default UploadFilmForm;
