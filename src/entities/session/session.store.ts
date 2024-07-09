import create from "zustand";
import { AuthStore } from "./session.types";
import { devtools, persist } from "zustand/middleware";
import { decodeAccessToken } from "./session.lib";
import { apiInstance } from "@/shared/api/base";

const useSessionStore = create<AuthStore>()(
  devtools(
    persist(
      (set, get) => ({
        //   user: null,
        loading: false,
        accessToken: undefined,
        refreshToken: undefined,
        accessTokenData: undefined,
        setAccessToken: (accessToken: string | undefined) => {
          const accessTokenData = (() => {
            try {
              return accessToken ? decodeAccessToken(accessToken) : undefined;
            } catch (error) {
              console.error(error);
              return undefined;
            }
          })();
          set({
            accessToken,
            accessTokenData,
          });
        },
        setRefreshToken: (refreshToken: string | undefined) =>
          set({
            refreshToken,
          }),
        setAuthorizationHeader(token: string) {
          if (get().accessToken) {
            apiInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
          }
        },
        toggleLoading: () => set({ loading: !get().loading }),
        init: () => {
          const { setAccessToken, setRefreshToken, setAuthorizationHeader } =
            get();
          setAccessToken(localStorage.getItem("accessToken"));
          setRefreshToken(localStorage.getItem("refreshToken"));
          setAuthorizationHeader(localStorage.getItem("accessToken"));
        },
        clearTokens: () =>
          set({
            accessToken: undefined,
            accessTokenData: undefined,
            refreshToken: undefined,
        }),
      }),
      {
        name: "AuthStore",
      }
    )
  )
);

export default useSessionStore;
