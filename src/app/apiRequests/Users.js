import { API_PORH } from "@/app/apiRequests/config";
import useStoreAuth from "../zustand-state/store";

export async function Login({ email, password }) {
  const setToken = useStoreAuth((state) => state.setToken);
  const setUserInfo = useStoreAuth((state) => state.setUserInfo);
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
      console.log("Success:", data.token);
    }
    if (!data.token) {
      console.error("Error:", data.error);
      throw new Error(data.error);
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
