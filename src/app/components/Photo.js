"use client";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import React, { useState } from "react";
import { HeartIcon } from "../icons/HeartIcon";

export default function PhotoCards({ pictures }) {
  const [like, setLike] = useState(false);
  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {pictures.map((dato) => {
        return (
          <Card key={dato.key} isFooterBlurred>
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <Button
                key={dato.key}
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
              <img
                alt="Card background"
                className="z-0 w-full h-[300px] object-cover"
                src={dato.picture}
              />
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}
