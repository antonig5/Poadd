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
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useStoreAuth;
