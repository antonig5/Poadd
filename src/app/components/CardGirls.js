"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import React, { useState } from "react";
import { HeartIcon } from "../icons/HeartIcon";

export default function CardGirls({ description, title, picture }) {
  const [like, setLike] = useState(false);
  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      <Card isFooterBlurred>
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
          <a href={`/adds/${5}`}>
            <img
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-[300px] object-cover"
              src={picture}
            />
          </a>
        </CardBody>

        <CardFooter className="absolute bg-black/40 bottom-0 z-10 ">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <b className="text-tiny text-white/60">{title}</b>
              <p className="text-tiny text-white/60">{description}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
