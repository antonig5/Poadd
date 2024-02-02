import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  ScrollShadow,
  Textarea,
} from "@nextui-org/react";
import React from "react";

export default function Coments() {
  return (
    <>
      <div className="overflow-auto max-h-[500px]">
        <h1 className="text-3xl font-semibold ">Comentarios</h1>
        <ScrollShadow>
          <Card className="m-7">
            <CardBody>
              <div className="flex gap-3">
                <Avatar size="lg" name="Junior" />{" "}
                <h3 className="text-xl font-semibold pt-2">User2323</h3>
              </div>
              <div className="m-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </CardBody>
            <CardFooter className="flex gap-4">
              <Button color="secondary" variant="shadow">
                Responder
              </Button>
              <Button color="danger" variant="flat">
                Reportar
              </Button>
              <time className=" text-right opacity-25">hace 2 horas</time>
            </CardFooter>
          </Card>
        </ScrollShadow>
      </div>
      <div>
        <form>
          <Textarea placeholder="Escribe un comentario" className="mb-3" />
          <Button color="primary">Comentar</Button>
        </form>
      </div>
    </>
  );
}
