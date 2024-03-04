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
import Alert from "../components/Alert";
import { toast } from "sonner";
import { Created } from "../apiRequests/Ads";

export default function AddAdvertisement() {
  const [inputs, setInputs] = useState([
    { id: `input-0`, service: "", price: "" },
  ]);

  const [fileInfo, setFileInfo] = useState([]);
  const [filePreview, setFilePreview] = useState([]);
  const [featured, setFeatured] = useState(false);
  const { token, userInfo } = useStoreAuth();
  const router = useRouter();

  const CreatedAds = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const description = formData.get("description");
      await Created({
        description,
        service: inputs,
        files: fileInfo,
        featured,
        userId: userInfo._id,
        toast: toast,
        token: token,
      });
    } catch (error) {
      toast.error("Error al crear el anuncio");
    }
  };

  const handleAddInput = () => {
    setInputs((inputs) => [
      ...inputs,
      { id: `input-${inputs.length}`, service: "", price: "" },
    ]);
  };

  const handleInputChange = (inputId, field, value) => {
    setInputs((inputs) =>
      inputs.map((input) =>
        input.id === inputId ? { ...input, [field]: value } : input
      )
    );
  };

  const handleRemoveInput = (inputId) => {
    setInputs((inputs) => inputs.filter((input) => input.id !== inputId));
  };
  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileInfoWithPreview = [];

    // Convertimos el FileList en un array para poder iterar sobre él
    Array.from(files).forEach((file) => {
      // Usamos FileReader para leer el contenido del archivo
      const reader = new FileReader();

      reader.onload = (e) => {
        // Cuando el archivo ha sido leído, guardamos la información necesaria
        fileInfoWithPreview.push({
          id: file.id,
          name: file.name,
          preview: e.target.result, // La URL base64 de la imagen
        });

        // Actualizamos el estado solo cuando todos los archivos han sido procesados
        if (fileInfoWithPreview.length === files.length) {
          setFileInfo((prevFiles) => [...prevFiles, ...files]);
          setFilePreview((prevPreviews) => [
            ...prevPreviews,
            ...fileInfoWithPreview,
          ]);
        }
      };

      // Leer el archivo como Data URL para obtener una vista previa
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
            <form
              className="flex flex-col gap-4"
              onSubmit={CreatedAds}
              enctype="multipart/form-data"
              method="POST"
            >
              <Textarea
                name="description"
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

              {inputs.map((input, index) => (
                <div
                  key={input.id}
                  className="flex w-full flex-wrap md:flex-nowrap gap-4"
                >
                  <Input
                    type="text"
                    placeholder="Servicio"
                    value={input.service}
                    onChange={(e) =>
                      handleInputChange(input.id, "service", e.target.value)
                    }
                    className="w-40"
                  />
                  <Input
                    type="number"
                    placeholder="Precio"
                    value={input.price}
                    onChange={(e) =>
                      handleInputChange(input.id, "price", e.target.value)
                    }
                    className="w-40"
                  />
                  {inputs.length > 1 ? (
                    <Button
                      color="danger"
                      isIconOnly
                      onClick={() => handleRemoveInput(input.id)}
                    >
                      X
                    </Button>
                  ) : null}
                </div>
              ))}
              <Button
                color="secondary"
                variant="shadow"
                onClick={handleAddInput}
              >
                Agregar servicio
              </Button>

              <input
                type="file"
                multiple={true}
                name="picture"
                id="picture"
                onChange={handleFileChange}
                className="w-60"
              />
              <div className="gap-2 grid grid-cols-2 sm:grid-cols-3">
                {filePreview.map((file, index) => (
                  <div key={index}>
                    <Card>
                      <CardBody className="overflow-visible p-0">
                        <Image
                          radius="lg"
                          className="w-full object-cover h-[140px]"
                          src={file.preview}
                          alt="Card background"
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
              <Checkbox onChange={(e) => setFeatured(e.target.checked)}>
                ¿Desea destacar este anuncio?
              </Checkbox>

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
