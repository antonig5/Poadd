import { API_PORH } from "@/app/apiRequests/config";

export async function Login({
  email,
  password,
  setToken,
  setUserInfo,
  toast,
  router,
}) {
  try {
    const response = await fetch(`http://localhost:9090/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    const data = await response.json();
    if (data.token) {
      setToken(data.token);
      setUserInfo(data.user);
      router.push("/");
    }
    if (!data.token) {
      console.error("Error:", data.error);
      toast.error(data.message);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
export const Register = async ({
  email,
  password,
  phone,
  nameUser,
  surname,
  nickname,
  rol,
}) => {
  try {
    return await fetch(`http://localhost:9090/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        phone,
        nameUser,
        surname,
        nickname,
        rol,
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

export const GetUser = async (id) => {
  try {
    return await fetch(`http://localhost:9090/user/${id}`, {
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
