"use client";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import React, { useState } from "react";
import { PoAddLogo } from "../icons/PoAdd";

import useStoreAuth from "../zustand-state/store";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, setUserInfo } = useStoreAuth();
  const router = useRouter();

  const hanledFormLogin = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:9090/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    const data = await response.json();
    if (data.token) {
      setToken(data.token);
      setUserInfo(data.user);
      console.log("Success:", data.token);
      router.push("/");
    }
    if (!data.token) {
      console.error("Error:", data.error);
      throw new Error(data.error);
    }
  };

  const [value, setValue] = useState("junior2nextui.org");

  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <Card>
        <CardHeader className="flex items-center justify-center">
          <PoAddLogo />
          <p className="font-bold text-inherit">OADD</p>
        </CardHeader>
        <CardBody>
          <form
            autoComplete="off"
            className="space-y-6"
            onSubmit={hanledFormLogin}
          >
            <Input
              label="Correo"
              type="email"
              variant="bordered"
              isInvalid={isInvalid}
              color={isInvalid ? "danger" : "success"}
              errorMessage={isInvalid && "Correo no valido"}
              onChange={(e) => setEmail(e.target.value)}
              onValueChange={setValue}
            />
            <Input
              label="Contraseña"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            <Link>¿Olvidaste tu contraseña?</Link>
            <Button
              type="submit"
              color="secondary"
              variant="shadow"
              className="w-full"
            >
              Iniciar sesion
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
