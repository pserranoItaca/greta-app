import { AccordionProps as MantineAccordionProps } from "@mantine/core";

export interface AccordionProps extends MantineAccordionProps {
  items: AccordionItemType[];
  variant: "contained" | "default" | "filled" | "separated";
}
