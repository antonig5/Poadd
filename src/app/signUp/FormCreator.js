import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";

export default function FormCreator() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleConfirmPasswordBlur = () => {
    if (confirmPassword !== "" && password !== confirmPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  };
  return (
    <form className="space-y-6" autocomplete="off">
      <Input type="email" label="Correo" />
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input
          type="password"
          label="Contraseña"
          value={password}
          onChange={handlePasswordChange}
        />
        <Input
          type="password"
          label="Confirmar contraseña"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          onBlur={handleConfirmPasswordBlur}
        />
      </div>

      {!passwordMatch && (
        <p style={{ color: "red" }}>Las contraseñas no coinciden</p>
      )}
      <Input type="number" label="Celular" />
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input type="text" label="Nombre" />
        <Input type="text" label="Apellido" />
      </div>

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
