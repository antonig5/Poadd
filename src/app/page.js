"use client";

import CardGirls from "./components/CardGirls";

export default function Home() {
  return (
    <CardGirls
      description={"hola"}
      title={"Catalina Gonzales"}
      picture={
        "https://cdn.pixabay.com/photo/2020/06/15/02/01/orange-5300009_1280.jpg"
      }
    />
  );
}
