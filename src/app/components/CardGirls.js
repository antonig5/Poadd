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

export default function CardGirls({ description, title, picture }) {
  const [like, setLike] = useState(false);

  const [ads, setAds] = useState([]);
  const getAds = async () => {
    const adsResponse = await GetAds();
    const adsWithUserDetails = await Promise.all(
      adsResponse.ads.map(async (ad) => {
        const userResponse = await GetUser(ad.userId);

        return {
          ...ad,
          user: userResponse.user,
        };
      })
    );

    setAds(adsWithUserDetails);
  };

  useEffect(() => {
    getAds();
  }, []);
  console.log(ads);
  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {ads.map((dato, index) => {
        return (
          <Card isFooterBlurred key={index}>
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
            <CardBody className="overflow-visible p-0">
              <a href={`/adds/${dato.userId}`} key={index}>
                <img
                  alt="Card background"
                  className="z-0 w-full h-[300px] object-cover"
                  src={`http://localhost:3000/${dato.picture[0].name}`}
                />
              </a>
            </CardBody>

            <CardFooter className="absolute bg-black/40 bottom-0 z-10 ">
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <b className="text-tiny text-white/60">
                    {`${dato.user.nameUser} ${dato.user.surname}`}
                  </b>
                  <p className="text-tiny text-white/60">{dato.description}</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
