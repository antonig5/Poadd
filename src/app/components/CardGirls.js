"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { HeartIcon } from "../icons/HeartIcon";
import { GetAds } from "../apiRequests/Ads";
import { GetUser } from "../apiRequests/Users";
import { GetPicture, GetPictures } from "../apiRequests/pictures";
import { toast } from "sonner";

export default function CardGirls() {
  const [like, setLike] = useState(false);

  const [ads, setAds] = useState([]);
  const getAds = async () => {
    try {
      const adsResponse = await GetAds(toast);
      const adsWithUserDetails = await Promise.all(
        adsResponse.ads.map(async (ad) => {
          const userResponse = await GetUser(ad.userId);
          const pictureAd = await GetPicture(ad._id);

          return {
            ...ad,
            user: userResponse.user,
            photos: pictureAd,
          };
        })
      );

      setAds(adsWithUserDetails);
    } catch (error) {
      toast.error("Error al mostrar los anuncios");
      console.log(error);
    }
  };

  useEffect(() => {
    getAds();
  }, []);

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {ads.map(
        (dato) => (
          console.log(dato),
          (
            <Card isFooterBlurred key={dato._id}>
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <Button
                  isIconOnly
                  aria-label="Like"
                  onPress={() => setLike((v) => !v)}
                  color="primary"
                >
                  <HeartIcon
                    className={like ? "[&>path]:stroke-transparent" : ""}
                    fill={like ? "red" : "none"}
                  />
                </Button>
              </CardHeader>
              <CardBody className="p-0">
                <a href={`/adds/${dato._id}`}>
                  <img
                    alt={`Card background `}
                    className="w-full h-[400px] object-cover"
                    src={`http://localhost:9090/${dato.photos.picture.picture[0]}`}
                  />
                </a>
              </CardBody>

              <CardFooter className="absolute bg-black/40 bottom-0 z-10 ">
                <div className="flex flex-grow gap-2 items-center">
                  <div className="flex flex-col">
                    <b className="text-tiny text-white/60">
                      {`${dato.user.nameUser} ${dato.user.surname}`}
                    </b>
                    <p className="text-tiny text-white/60">
                      {dato.description}
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          )
        )
      )}
    </div>
  );
}
