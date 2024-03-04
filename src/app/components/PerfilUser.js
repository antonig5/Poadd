import { Button, Chip, Image } from "@nextui-org/react";
import React from "react";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";
import Link from "next/link";

export default function PerfilUser({ datos }) {
  return (
    <>
      <div className="grid grid-rows-2 grid-flow-col gap-4 ">
        <div className="row-span-3">
          <Image
            width={300}
            height={200}
            src={`http://localhost:9090/${datos.picture.picture.picture[1]}`}
            isBlurred
            alt="NextUI Image with fallback"
          />
          <Button color="danger" variant="flat" className="mt-3">
            ¿Reportar este perfil?
          </Button>
        </div>
        <div className="col-span-2 gap-4 flex " name="buttons">
          <Button size="lg" color="secondary">
            {datos.user.phone}
          </Button>
          <Link
            href={`https://wa.me/${datos.user.phone}?text=Hola,%20quiero%20más%20información`}
          >
            <Button className="bg-green-600" size="lg">
              <WhatsAppIcon /> WhatsApp
            </Button>
          </Link>
        </div>
        <div className="col-span-2 row-span-2 mt-[-150px]" name="info">
          <h3 className="text-3xl font-semibold">Servicios:</h3>
          <div className="flex gap-3">
            {datos.service.map((item) => {
              return (
                <Chip
                  key={item._id}
                  color="secondary"
                  radius="sm"
                  variant="shadow"
                  className="mb-3"
                >
                  {item.service}: ${item.price}
                </Chip>
              );
            })}
          </div>
          <h3 className="text-3xl font-semibold">Categorias:</h3>
          <Chip color="secondary" radius="sm" variant="shadow">
            Morena
          </Chip>
        </div>
      </div>
    </>
  );
}
