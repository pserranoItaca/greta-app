import {
  DefaultMantineColor,
  Notification as MantineNotification,
} from "@mantine/core";

interface NotificationProps {
  message: string;
  color?: "red" | "blue" | "green" | "yellow" | "teal";
  title?: string;
}

const Notification = ({
  message,
  title = "",
  color = "red",
}: NotificationProps) => {
  return (
    <MantineNotification title={title} color={color}>
      {message}
    </MantineNotification>
  );
};
export default Notification;
