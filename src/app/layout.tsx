import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/notifications/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import theme from "../../styles/Theme";
import { Notifications } from "@mantine/notifications";
import { Footer } from "@/components/Footer";
import FilmsHeader from "@/components/FilmsHeader/FilmsHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GRETA!",
  icons: {
    icon: "/brand/logo.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/brand/logo.ico" sizes="any" />
      </head>
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
