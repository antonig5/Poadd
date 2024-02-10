"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Image,
  Input,
  Textarea,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import useStoreAuth from "../middleware/zustand-state/store";
import { toast } from "sonner";
import Alert from "../components/Alert";

export default function AddAdvertisement() {
  const [inputs, setInputs] = useState(["input-0"]);
  const [fileInfo, setFileInfo] = useState([]);
  const { token } = useStoreAuth();
  const router = useRouter();
  const handleAddInput = () => {
    setInputs((inputs) => [...inputs, `input-${inputs.length}`]);
  };
  const handleRemoveInput = (inputId) => {
    setInputs((inputs) => inputs.filter((input) => input !== inputId));
  };
  const handleFileChange = (event) => {
    const files = event.target.files;
    const newFileInfo = [];

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        newFileInfo.push({
          id: Date.now(),
          name: file.name,
          preview: reader.result,
        });

        if (newFileInfo.length === files.length) {
          setFileInfo((prevFileInfo) => [...prevFileInfo, ...newFileInfo]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const handleRemoveImage = (id) => {
    setFileInfo((prevFileInfo) =>
      prevFileInfo.filter((file) => file.id !== id)
    );
  };

  if (!token) {
    return router.push("/login");
  }

  return (
    <>
      <Alert />
      <div className=" sm:mx-auto  sm:w-full sm:max-w-sm ">
        <Card className="max-w-full w-[840px]  ">
          <CardBody className="overflow-auto">
            <form className="flex flex-col gap-4">
              <Textarea
                required
                label="Descripcion"
                variant="bordered"
                placeholder="Agrega una descripcion"
                disableAnimation
                disableAutosize
                classNames={{
                  base: "max-w-xs",
                  input: "resize-y min-h-[40px]",
                }}
              />

              {inputs.map((inputId) => (
                <div
                  key={inputId}
                  className="flex w-full flex-wrap md:flex-nowrap gap-4"
                >
                  <Input label="Servicio" type="service" className="w-40" />
                  <Input label="Precio" type="number" className="w-40" />

                  <Button
                    isIconOnly
                    color="danger"
                    onClick={() => handleRemoveInput(inputId)}
                  >
                    X
                  </Button>
                </div>
              ))}
              <Button
                color="secondary"
                variant="shadow"
                onClick={handleAddInput}
              >
                Agregar servicio
              </Button>

              <Input
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={handleFileChange}
                multiple
                className="w-60"
              />
              <div className="gap-2 grid grid-cols-2 sm:grid-cols-3">
                {fileInfo.map((file) => (
                  <div key={file.id}>
                    <Card>
                      <CardBody className="overflow-visible p-0">
                        <Image
                          radius="lg"
                          className="w-full object-cover h-[140px]"
                          src={file.preview}
                          alt={`Preview ${file.id}`}
                        />
                      </CardBody>
                      <CardFooter className="text-small justify-between">
                        <Button
                          color="danger"
                          onClick={() => handleRemoveImage(file.id)}
                        >
                          Eliminar
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
              <Checkbox>¿Desea destacar este anuncio?</Checkbox>

              <Button color="primary" type="submit">
                Crear Anuncio
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
