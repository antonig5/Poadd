"use client";
import { GetAd } from "@/app/apiRequests/Ads";
import { GetUser } from "@/app/apiRequests/Users";
import { GetPicture } from "@/app/apiRequests/pictures";
import Coments from "@/app/components/Coments";
import PerfilUser from "@/app/components/PerfilUser";
import PhotoCards from "@/app/components/Photo";
import TabsTech from "@/app/components/TabsTech";
import Title from "@/app/components/Title";
import React, { useEffect, useState } from "react";

export default function AddsUSer({ params }) {
  const id = params.id;
  const [ads, setAd] = useState(null);
  useEffect(() => {
    const GetData = async () => {
      try {
        const adsResponse = await GetAd(id); // Asumiendo que esto devuelve el objeto directamente
        if (adsResponse && adsResponse.ads) {
          const userResponse = await GetUser(adsResponse.ads.userId);
          const pictureAd = await GetPicture(adsResponse.ads._id);

          // Asegúrate de que userResponse y pictureAd contienen los datos esperados
          const adWithUserDetails = {
            ...adsResponse.ads,
            user: userResponse ? userResponse.user : null, // Asumiendo que userResponse tiene una propiedad 'user'
            picture: pictureAd,
            // Asegúrate de que esta es la forma correcta de acceder a la imagen
          };

          setAd([adWithUserDetails]); // Usa un array aquí si tu componente espera un array
        }
      } catch (error) {
        console.error("Error loading ad details:", error);
      }
    };

    GetData();
  }, [id]); // Asegúrate de que 'id' es una dependencia si cambia con el tiempo

  return (
    <>
      {ads &&
        ads.map((dato, index) => {
          return (
            <div key={index}>
              <Title
                text={`${dato.user.nameUser} ${dato.user.surname}`}
                size={50}
                color={"#9823C2"}
                bold={"bold"}
                direction={"center"}
                shadow={true}
              />
              <div className="max-w-screen-lg mx-auto">
                <p className="text-center w-full mb-10">{dato.description}</p>
                <TabsTech
                  size={"md"}
                  color={"primary"}
                  tabData={[
                    {
                      key: "galeria",
                      title: "Galeria",
                      content: (
                        <PhotoCards pictures={dato.picture.picture.picture} />
                      ),
                    },
                    {
                      key: "perfil",
                      title: "Perfil",
                      content: <PerfilUser datos={dato} />,
                    },
                    {
                      key: "experiencia",
                      title: "Experiencias",
                      content: <Coments id={id} />,
                    },
                  ]}
                />
              </div>
            </div>
          );
        })}
    </>
  );
}
