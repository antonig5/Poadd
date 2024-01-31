import { API_PORH } from "@/app/apiRequests/config";

export async function GetAdds() {
  try {
    const response = await fetch(`${API_PORH}/api/adds`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
