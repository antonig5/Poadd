import { Button, Chip } from "@nextui-org/react";
import React from "react";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";
import Link from "next/link";

export default function PerfilUser() {
  return (
    <>
      <Button color="secondary">3109856789</Button>
      <Link
        href="https://wa.me/3208558301?text=Hola,%20quiero%20más%20información"
        target="_blank"
      >
        <Button className="bg-green-600">
          <WhatsAppIcon /> WhatsApp
        </Button>
      </Link>

      <h3>Servicios</h3>
      <div className="flex gap-4">
        <Chip color="secondary" radius="sm" variant="shadow">
          Masaje
        </Chip>
      </div>
      <h3>Categorias</h3>
      <div className="flex gap-4">
        <Chip color="secondary" radius="sm" variant="shadow">
          Morena
        </Chip>
      </div>

      <Button color="danger" variant="flat">
        ¿Reportar este perfil?
      </Button>
    </>
  );
}
