"use client";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/notifications/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import theme from "../../styles/Theme";
import { Notifications } from "@mantine/notifications";
import { Footer } from "@/components/Footer";
import FilmsHeader from "@/components/FilmsHeader/FilmsHeader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MantineProvider theme={theme}>
          <FilmsHeader />
          {children}
          <Notifications />
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
