import { MenuProps } from "@mantine/core";

type OptionsType = {
  label: string;
  link?: string;
  icon?: React.ReactNode;
};

export interface AvatarMenuProps extends MenuProps {
  options?: OptionsType[];
}
