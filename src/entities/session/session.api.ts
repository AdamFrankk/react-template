import { apiInstance } from "@/shared/api/base";
import {
  CreateUserDto,
  CreateUserResponseDto,
  LoginUserDto,
  LoginUserResponseDto,
} from "./session.types";
import useSessionStore from "./session.store";

const {
  setAccessToken,
  setRefreshToken,
  setAuthorizationHeader,
  toggleLoading,
} = useSessionStore.getState();

/**
 * Регистрация
 */
export const signUp = async (data: CreateUserDto) => {
  toggleLoading();
  await apiInstance
    .post<CreateUserResponseDto>("/auth/sign-in", data)
    .then((response) => {
      console.log(response.data.id);
    })
    .finally(() => toggleLoading());
};

/**
 * Вход
 */
export const signIn = async (data: LoginUserDto) => {
  toggleLoading();
  await apiInstance
    .post<LoginUserResponseDto>("/auth/sign-in", data)
    .then((response) => {
      const accessToken = response.data.accessToken;
      setAccessToken(accessToken);
      const refreshToken = response.data.refreshToken;
      setRefreshToken(refreshToken);
      setAuthorizationHeader(accessToken);
    })
    .finally(() => toggleLoading());
};
