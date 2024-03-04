import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useStoreAuth = create(
  persist(
    (set) => ({
      token: null,
      userInfo: null,
      setToken: (token) => set(() => ({ token })),
      setUserInfo: (userInfo) => set(() => ({ userInfo })),
      logout: () => set(() => ({ token: null, userInfo: null })),

      isTokenValid: () => {
        const store = useStoreAuth.getState();
        const token = store.token;
        if (!token) return false;

        // Decodificar el payload del token JWT
        const payloadBase64 = token.split(".")[1];
        const decodedPayload = JSON.parse(window.atob(payloadBase64));
        const exp = decodedPayload.exp;

        // Verificar si el token ha expirado
        const now = Math.floor(Date.now() / 1000); // Tiempo actual en segundos
        return now < exp;
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useStoreAuth;
