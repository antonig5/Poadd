"use client";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  ScrollShadow,
  Textarea,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { CreatedComment, GetComments } from "../apiRequests/comments";
import Empty from "./Empty";
import useStoreAuth from "../middleware/zustand-state/store";
import { GetUser } from "../apiRequests/Users";

export default function Comments({ id }) {
  const { token, userInfo } = useStoreAuth();
  const [showComments, setShowComments] = useState([]);
  const AllComments = async () => {
    try {
      const comments = await GetComments({ id });
      const commentsWithUser = await Promise.all(
        comments.comments.map(async (comment) => {
          const userResponse = await GetUser(comment.userId);
          return {
            ...comment,
            user: userResponse.user,
          };
        })
      );
      setShowComments(commentsWithUser);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(showComments);
  const Created = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData(e.target);
      const comment = formdata.get("comment");
      await CreatedComment({
        userId: userInfo._id,
        addId: id,
        comment: comment,
      });
      AllComments();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AllComments();
  }, []);

  return (
    <>
      <div className="overflow-auto max-h-[500px]">
        <h1 className="text-3xl font-semibold ">Comentarios</h1>
        {showComments?.length > 0 ? (
          showComments?.map((comment, index) => (
            <ScrollShadow key={index}>
              <Card className="m-7">
                <CardBody>
                  <div className="flex gap-3">
                    <Avatar
                      size="lg"
                      name={
                        comment.user.rol === "creator"
                          ? `${comment.user.nameUser} ${comment.user.surname}`
                          : comment.user.nickname
                      }
                    />{" "}
                    <h3 className="text-xl font-semibold pt-2">
                      {comment.user.rol === "creator"
                        ? `${comment.user.nameUser} ${comment.user.surname}`
                        : comment.user.nickname}
                    </h3>
                  </div>
                  <div className="m-4">
                    <p>{comment.comment}</p>
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
          ))
        ) : (
          <Empty text={"No hay comentarios"} />
        )}
      </div>
      <div>
        <form onSubmit={Created} method="POST">
          <Textarea
            id="comment"
            name="comment"
            placeholder="Escribe un comentario"
            className="mb-3"
          />
          <Button type="submit" color="primary">
            Comentar
          </Button>
        </form>
      </div>
    </>
  );
}
