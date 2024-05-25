import { AccordionProps as MantineAccordionProps } from "@mantine/core";

export type AccordionItemType = {
  icon: string | React.ReactNode;
  value: string;
  description: string;
};

export interface AccordionProps extends MantineAccordionProps {
  items: AccordionItemType[];
  variant: "contained" | "default" | "filled" | "separated";
}
