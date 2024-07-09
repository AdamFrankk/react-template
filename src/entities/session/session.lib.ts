import jwtDecode from "jwt-decode";
import useSessionStore from "./session.store";
import { TokenDataSchema } from "./session.contracts";
import { TokenData } from "./session.types";

export const decodeAccessToken = (accessToken: string) =>
  TokenDataSchema.parse(jwtDecode<TokenData>(accessToken));

export const hasToken = () => Boolean(useSessionStore.getState().accessToken);


