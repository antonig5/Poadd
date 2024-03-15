export const GetComments = async ({ id }) => {
  try {
    return await fetch(`http://localhost:9090/comments/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  } catch (error) {
    console.log("Error:", error);
  }
};
export const CreatedComment = async ({ comment, userId, addId, toast }) => {
  try {
    return await fetch(`http://localhost:9090/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment, userId, addId }),
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
    toast.success("Comentario creado con exito");
  } catch (error) {
    toast.error("Error al crear el comentario");
  }
};
