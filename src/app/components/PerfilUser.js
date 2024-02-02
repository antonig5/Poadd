import { Button, Chip, Image } from "@nextui-org/react";
import React from "react";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";
import Link from "next/link";

export default function PerfilUser() {
  return (
    <>
      <div className="grid grid-flow-col">
        <div className="row-span-3">
          <Image
            width={300}
            height={200}
            src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
            objectFit="cover"
            alt="NextUI Image with fallback"
          />
        </div>
        <div className="col-span-2 gap-4 flex">
          <Button size="xl" color="secondary">
            3109856789
          </Button>
          <Link
            href="https://wa.me/3208558301?text=Hola,%20quiero%20más%20información"
            target="_blank"
          >
            <Button className="bg-green-600">
              <WhatsAppIcon /> WhatsApp
            </Button>
          </Link>
        </div>
        <div className="row-span-2 col-span-2">
          <h3 className="text-3xl font-semibold">Servicios:</h3>
          <div className="flex gap-3 ">
            <Chip
              color="secondary"
              radius="sm"
              variant="shadow"
              className="mb-3"
            >
              Masaje
            </Chip>
          </div>

          <h3 className="text-3xl font-semibold">Categorias:</h3>
          <Chip color="secondary" radius="sm" variant="shadow">
            Morena
          </Chip>
        </div>
      </div>

      <Button color="danger" variant="flat" className="mt-3">
        ¿Reportar este perfil?
      </Button>
    </>
  );
}
