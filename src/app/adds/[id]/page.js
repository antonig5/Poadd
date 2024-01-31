"use client";
import PerfilUser from "@/app/components/PerfilUser";
import PhotoCards from "@/app/components/Photo";
import TabsTech from "@/app/components/TabsTech";
import Title from "@/app/components/Title";
import React from "react";

export default function AddsUSer({ params }) {
  return (
    <>
      <Title
        text={"Catalina Gonzales"}
        size={50}
        color={"#9823C2"}
        bold={"bold"}
        direction={"center"}
        shadow={true}
      />
      <div className="max-w-screen-lg mx-auto">
        <p className="text-center w-full mb-10">
          Las fresas son frutas pequeñas y rojas pertenecientes al género
          Fragaria. Son conocidas por su sabor dulce y jugoso, así como por su
          aroma distintivo. Las fresas son ricas en vitamina C, antioxidantes y
          fibra. Típicamente, tienen una textura suave y una superficie cubierta
          de pequeñas semillas externas. Estas frutas son versátiles y se
          consumen frescas, en ensaladas, postres, jugos y muchos otros
          platillos. Además, las fresas son cultivadas en diferentes partes del
          mundo y están disponibles en diversas variedades.
        </p>
        <TabsTech
          size={"md"}
          color={"primary"}
          tabData={[
            {
              key: "galeria",
              title: "Galeria",
              content: (
                <PhotoCards
                  pictures={[
                    {
                      picture:
                        "https://cdn.pixabay.com/photo/2020/06/15/02/01/orange-5300009_1280.jpg",
                      key: 1,
                    },

                    {
                      picture:
                        "https://cdn.pixabay.com/photo/2020/06/15/02/01/orange-5300009_1280.jpg",
                      key: 2,
                    },
                  ]}
                />
              ),
            },
            {
              key: "perfil",
              title: "Perfil",
              content: <PerfilUser />,
            },
            {
              key: "experiencia",
              title: "Experiencias",
              content: "este es una experiencia",
            },
          ]}
        />
      </div>
    </>
  );
}
