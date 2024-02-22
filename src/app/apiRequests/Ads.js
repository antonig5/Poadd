export const Created = async ({
  description,
  service,
  picture,
  featured,
  userId,
  toast,
  token,
}) => {
  try {
    return await fetch(`http://localhost:9090/ads/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        description,
        service,
        picture,
        featured,
        userId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error("Error al crear el anuncio");
        }
        if (data.message) {
          toast.success("Anuncio creado con exito");
        }
      });
  } catch (error) {
    console.log("Error:", error);
  }
};

export const GetAds = async () => {
  try {
    return await fetch(`http://localhost:9090/ads`, {
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
