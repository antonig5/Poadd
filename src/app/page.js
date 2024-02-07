"use client";
import { useRouter } from "next/navigation";
import CardGirls from "./components/CardGirls";
import useStoreAuth from "./zustand-state/store";

export default function Home() {
  const router = useRouter();
  const { token, userInfo, logout } = useStoreAuth();
  if (!token) {
    return router.push("/login");
  }
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
