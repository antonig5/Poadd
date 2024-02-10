export const Created = async ({
  description,
  service,
  picture,
  featured,
  userId,
}) => {
  try {
    return await fetch(`http://localhost:9090/ads/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
        console.log("Success:", data);
      });
  } catch (error) {
    console.log("Error:", error);
  }
};
