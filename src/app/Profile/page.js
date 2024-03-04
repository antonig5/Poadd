"use client";
import { Card, CardBody, Chip, Image } from "@nextui-org/react";
import Title from "../components/Title";
import { HeartIcon } from "../icons/HeartIcon";
import { Ad } from "../icons/Ad";
import { Nequi } from "../icons/Nequi";
import useStoreAuth from "../middleware/zustand-state/store";
import { useRouter } from "next/navigation";

export default function Profile() {
  const { token, isTokenValid, logout } = useStoreAuth();
  const router = useRouter();
  if (!isTokenValid()) {
    logout();
  }
  if (!token) {
    router.push("/");
  }
  return (
    <div className=" m-20">
      <div className="grid grid-cols-2 grid-rows-1 gap-0">
        <div>
          <div>
            <Image
              src="http://1.bp.blogspot.com/-WCutlkpmNbg/VWWPyJh3vTI/AAAAAAAAINY/D0qSVgMA_SI/s400/Sakamoto.jpg"
              alt="Profile"
              className="w-30 h-30 sm:w-80 sm:h-80 rounded-full"
            />
          </div>
          <div className="mt-10">
            <Title text={"Mi información"} size={"32px"} bold={"700"} />

            <ul class="my-4">
              <li class="inline-block  px-4 py-1 mr-2">
                <p class="m-0 flex gap-3">
                  <strong>Nombre:</strong> antonio
                </p>
              </li>
              <li class="inline-block  px-4 py-1 mr-2">
                <p class="m-0 flex gap-3">
                  <strong>Correo:</strong> giraldoantonio89@gmail.com
                </p>
              </li>
              <li class="inline-block  px-4 py-1 mr-2">
                <p class="m-0 flex gap-3">
                  <strong>Contraseña:</strong> **********************
                </p>
              </li>
              <li class="inline-block  px-4 py-1 mr-2">
                <p class="m-0 flex gap-3">
                  <strong>Celular:</strong> 3208558301
                </p>
              </li>
              <li class="inline-block  px-4 py-1 mr-2">
                <p class="m-0 flex gap-3">
                  <strong>Nombre:</strong> antonio
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="-ml-0 lg:-ml-32">
          <Title text={"Neko chan"} size={"60px"} bold={"700"} />
          <div className="flex gap-3">
            <p className="flex gap-2">
              <HeartIcon
                fill="red"
                size={20}
                className={"[&>path]:stroke-transparent"}
              />{" "}
              100 Likes
            </p>{" "}
            <p className="flex gap-2">
              <Ad size={20} /> 40 Anuncios
            </p>
          </div>
          <div className="grid grid-cols-2 grid-rows-1 gap-10 mt-10">
            <div>
              <Title text={"Mis medios de pago"} size={"32px"} bold={"700"} />
              <Card className=" bg-purple-950 mt-4" isPressable>
                <CardBody>
                  <div class="flex items-center">
                    <Nequi size={80} />
                    <div class="flex flex-col">
                      <strong>Cuenta:*********54</strong>
                      <span>Entidad: Nequi</span>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div>
              <Title text={"Mis categorias"} size={"32px"} bold={"700"} />
              <div name="categories" className="my-4">
                <Chip
                  color="secondary"
                  radius="sm"
                  className="inline-block  px-4 py-1 mr-2"
                >
                  Cabello largo
                </Chip>

                <Chip
                  color="secondary"
                  radius="sm"
                  className="inline-block  px-4 py-1 mr-2 mb-2"
                >
                  Ojos claros
                </Chip>
                <Chip
                  color="secondary"
                  radius="sm"
                  className="inline-block  px-4 py-1 mr-2"
                >
                  Ojos claros
                </Chip>
                <Chip
                  color="secondary"
                  radius="sm"
                  className="inline-block  px-4 py-1 mr-2"
                >
                  Ojos claros
                </Chip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
