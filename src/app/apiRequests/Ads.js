export const Created = async ({
  description,
  service,
  files,

  featured,
  userId,
  toast,
  token,
}) => {
  const formData = new FormData();

  for (const file of files) {
    formData.append("photos", file);
  }

  try {
    await fetch(`http://localhost:9090/ads/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        description,
        service,
        featured,
        userId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        formData.append("addId", data.ads);
        if (data.error) {
          toast.error("Error al crear el anuncio");
        }
        if (data.message) {
          toast.success("Anuncio creado con exito");
        }
      });
    await fetch(`http://localhost:9090/picture`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error("Error al crear el anuncio");
        }
      });
  } catch (error) {
    toast.error("Error al crear el anuncio");
  }
};

export const GetAds = async (toast) => {
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
    toast.error("Error al mostrar los anuncios");
  }
};
export const GetAd = async (id) => {
  try {
    return await fetch(`http://localhost:9090/ads/${id}`, {
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
    toast.error("Error al mostrar el anuncio");
  }
};
