import { z } from "zod";
import {
  CreateUserDtoSchema,
  LoginUserDtoSchema,
  UserSchema,
  TokenDataSchema,
  roles,
  LoginUserResponseDto,
  CreateUserResponseDtoSchema,
} from "./session.contracts";

export type CreateUserDto = z.infer<typeof CreateUserDtoSchema>;
export type CreateUserResponseDto = z.infer<typeof CreateUserResponseDtoSchema>;
export type LoginUserDto = z.infer<typeof LoginUserDtoSchema>;
export type LoginUserResponseDto = z.infer<typeof LoginUserResponseDto>;
export type TokenData = z.infer<typeof TokenDataSchema>;

export type User = z.infer<typeof UserSchema>;
export type Role = z.infer<typeof roles>;

export interface AuthStore {
  //   user: User | null;
  //   auth: boolean;
  loading: boolean;
  accessToken: string | undefined;
  refreshToken: string | undefined;
  accessTokenData: TokenData | undefined;
  setAccessToken: (accessToken: string | undefined) => void;
  setRefreshToken: (refreshToken: string | undefined) => void;
  setAuthorizationHeader: (token: string) => void;
  toggleLoading: () => void;
  // set tokens on the app start
  init: () => void;
  clearTokens: () => void;
}
