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
     
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(error.message);
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
  toast,
  router,
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
        if (data.error) {
          toast.error("Error al crear el usuario");
        }
        if (data.message) {
          toast.success("Usuario creado con exito");
          router.push("/login");
        }
      });
  } catch (error) {
    toast.error("Error al crear el usuario");
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
