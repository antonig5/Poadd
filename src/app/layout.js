import MenuNav from "./components/Nav";
import "./globals.css";

import { Providers } from "./providers";

export const metadata = {
  title: "POADD",
  description: "IS a web of adds",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="purple-dark text-foreground bg-background ">
      <head>
        <link rel="icon" href="/Logotipo.svg" />
      </head>
      <body>
        <Providers>
          <MenuNav>{children}</MenuNav>
        </Providers>
      </body>
    </html>
  );
}
