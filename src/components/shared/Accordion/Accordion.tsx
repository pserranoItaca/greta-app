import { Accordion as MantineAccordion } from "@mantine/core";
import styles from "./Accordion.module.scss";
import { AccordionProps } from "./Accordion.types";

const Accordion = ({ items, variant = "separated" }: AccordionProps) => {
  const render = items.map((item) => (
    <MantineAccordion.Item key={item.value} value={item.value}>
      <MantineAccordion.Control icon={item.icon}>
        {item.value}
      </MantineAccordion.Control>
      <MantineAccordion.Panel>{item.description}</MantineAccordion.Panel>
    </MantineAccordion.Item>
  ));

  return (
    <MantineAccordion
      variant={variant}
      className={styles.accordion}
      classNames={{
        label: styles.label,
        itemTitle: styles.itemTitle,
        item: styles.item,
        panel: styles.panel,
        root: styles.root,
        control: styles.control,
        chevron: styles.chevron,
      }}
    >
      {render}
    </MantineAccordion>
  );
};
export default Accordion;
