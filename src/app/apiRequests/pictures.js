export const GetPicture = async (id) => {
  try {
    return await fetch(`http://localhost:9090/picture/${id}`, {
      method: "GET",
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  } catch (error) {
    console.log("Error:", error);
  }
};
export const GetPictures = async () => {
  try {
    return await fetch(`http://localhost:9090/picture`, {
      method: "GET",
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  } catch (error) {
    console.log("Error:", error);
  }
};
