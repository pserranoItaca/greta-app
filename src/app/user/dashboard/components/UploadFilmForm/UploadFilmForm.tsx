"use client";

import { useEffect, useRef } from "react";
import {
  Button,
  FileButton,
  Group,
  MultiSelect,
  Select,
  Tabs,
  TagsInput,
  TextInput,
  Textarea,
  Title,
  rem,
} from "@mantine/core";
import styles from "./UploadFilmForm.module.scss";
import {
  IconArchiveFilled,
  IconEyeQuestion,
  IconArchive,
  IconBrandTeams,
  IconCloudUpload,
  IconDownload,
  IconX,
} from "@tabler/icons-react";
import { FormEvent, useState } from "react";
import { EmptyFilmData, FilmGenres } from "@/testing/DumbData";
import { FilmModel } from "@/infraestructure/models/Film";
import useUploadFilmForm from "./useUploadFilmForm";

const UploadFilmForm = () => {
  const { handleSubmit, loading } = useUploadFilmForm();

  const [values, setValues] = useState<FilmModel>({
    id: "",
    id_user: localStorage.getItem("user_id") || "",
    route: "",
    title: "",
    descript: "",
    genre: "",
    poster: "",
    views: 0,
    rating: 0,
    comments: [],
    director: "",
    art: "",
    sound: "",
    actors: "",
  });

  const [filmFile, setFilmFile] = useState<File | null>(null);
  const [posterFile, setPosterFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className={styles.form}>
      <Title className={styles.title}>Estamos deseando ver tu creación</Title>
      <Title className={styles.subtitle}>
        pero antes debemos saber una serie de cosas...
      </Title>
      <form
        className={styles.form}
        onSubmit={(e) => handleSubmit(e, values, filmFile!)}
      >
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
              onChange={(e) => handleChange(e)}
              name="title"
              required
            />

            <TextInput
              leftSectionPointerEvents="none"
              label="¿De que trata tu obra?"
              placeholder="Descripción de tu creación"
              name="descript"
              onChange={(e) => handleChange(e)}
              required
            />
            <Select
              label="Selecciona el genero de tu obra"
              name="genre"
              placeholder="Selecciona los géneros de tu obra"
              data={FilmGenres}
              defaultValue={FilmGenres[0]}
              required
              onChange={(e) => setValues({ ...values, genre: e! })}
            ></Select>
          </Tabs.Panel>
          <Tabs.Panel value="uploads">
            <FileButton
              onChange={(e) => {
                setFilmFile(e);
                setValues({ ...values, route: e?.name! });
                console.log(values);
              }}
              accept="video/mp4"
              name="filmFile"
            >
              {(props) => (
                <Button {...props}>
                  Sube tu peli! - solo se aceptan archivos mp4
                </Button>
              )}
            </FileButton>
            {filmFile && <p>Subido: {filmFile.name}</p>}
            {/* <FileButton
              onChange={setPosterFile}
              accept="image/png"
              name="posterFile"
            >
              {(props) => (
                <Button {...props}>
                  Sube tu poster! - solo se aceptan archivos png{" "}
                </Button>
              )}
            </FileButton>
            {posterFile && <p>Subido: {posterFile.name}</p>} */}
          </Tabs.Panel>
          <Tabs.Panel value="people">
            <TextInput
              leftSectionPointerEvents="none"
              label="Director"
              placeholder="Director"
              name="director"
              onChange={(e) => handleChange(e)}
            />{" "}
            <TextInput
              leftSectionPointerEvents="none"
              label="Director de arte"
              placeholder="Director de arte"
              name="art"
              onChange={(e) => handleChange(e)}
            />{" "}
            <TextInput
              leftSectionPointerEvents="none"
              label="Director de sonido"
              placeholder="Director de sonido"
              name="sound"
              onChange={(e) => handleChange(e)}
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
