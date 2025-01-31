import z from "zod";
import { loginSchema, registerSchema } from "../schema";

export type RegisterCredentials = z.infer<typeof registerSchema>;

export type RegisterInput = Omit<RegisterCredentials, "confirmPassword">;

export interface RegisterResponse {
  accessToken: string;
  user: {
    id: string;
    fullName: string;
    email: string;
  };
}

export type LoginCredentials = z.infer<typeof loginSchema>;

export type LoginInput = LoginCredentials;

export interface LoginResponse {
  accessToken: string;
  user: {
    id: string;
    fullName: string;
    email: string;
  };
}
