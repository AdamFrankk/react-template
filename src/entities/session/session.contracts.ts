import { z } from "zod";

export const roles = z.enum(["admin", "user"]);

export const CreateUserDtoSchema = z.object({
  name: z.string().min(1),
  surname: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
});

export const CreateUserResponseDtoSchema = z.object({
  id: z.number(),
})

export const LoginUserDtoSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const LoginUserResponseDto = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  surname: z.string(),
  email: z.string(),
  image: z.string(),
});

export const TokenDataSchema = z.object({
  userId: z.string(),
  roles,
});
