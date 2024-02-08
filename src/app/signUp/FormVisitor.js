import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { Register } from "../apiRequests/Users";

export default function FormVisitor() {
  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const phone = formData.get("phone");
    const nameUser = formData.get("nameUser");
    const surname = formData.get("surname");
    const nickname = formData.get("nickname");
    const rol = formData.get("rol") || "visitor";
    await Register({
      email,
      password,
      phone,
      nameUser,
      surname,
      nickname,
      rol,
    });
  };

  return (
    <form className="space-y-6" autoComplete="off" onSubmit={handleRegister}>
      <Input type="email" label="Correo" name="email" />
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input type="password" label="Contraseña" name="password" />
      </div>

      <Input type="number" label="Celular" name="phone" />
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input type="text" label="Nombre" name="nameUser" />
        <Input type="text" label="Apellido" name="surname" />
      </div>

      <Input type="text" label="Nickname(apodo)" name="nickname" />
      <Button
        type="submit"
        color="secondary"
        variant="shadow"
        className="w-full"
      >
        Crear cuenta
      </Button>
    </form>
  );
}
