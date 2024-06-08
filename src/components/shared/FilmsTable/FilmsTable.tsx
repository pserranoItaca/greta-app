import { FilmModel } from "@/infraestructure/models/Film";
import {
  ActionIcon,
  Flex,
  NumberFormatter,
  Rating,
  Table,
} from "@mantine/core";
import { IconAdjustments } from "@tabler/icons-react";
import styles from "./FilmsTable.module.scss";
import { MouseEventHandler } from "react";

interface UserFilmsProps {
  films?: FilmModel[];
  onClickTable: MouseEventHandler<SVGSVGElement> | undefined;
}

const FilmsTable = ({ films = [], onClickTable }: UserFilmsProps) => {
  return (
    <Table className={styles.table}>
      <Table.Thead>
        <Table.Tr>
          {" "}
          <Table.Th>Título</Table.Th>
          <Table.Th>Visualizaciones</Table.Th>
          <Table.Th>Puntuación</Table.Th>
          {/* <Table.Th>Comentarios</Table.Th> */}
          <Table.Th>Editar</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {films.map((item) => (
          <Table.Tr key={item.id}>
            <Table.Td className={styles.table_title}>{item.title}</Table.Td>
            <Table.Td>
              <NumberFormatter
                thousandSeparator="."
                decimalSeparator=","
                value={item.views || 0}
              />
            </Table.Td>
            <Table.Td>
              <Rating value={item.rating} fractions={4} readOnly />
            </Table.Td>
            {/* <Table.Td>{item.comments.length}</Table.Td> */}
            <Table.Td>
              <ActionIcon variant="filled" aria-label="Settings">
                <IconAdjustments
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                  onClick={onClickTable}
                />
              </ActionIcon>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};
export default FilmsTable;
