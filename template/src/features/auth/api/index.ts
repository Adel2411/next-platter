import fetchInstance from "@/lib/api";
import {
  LoginInput,
  LoginResponse,
  RegisterInput,
  RegisterResponse,
} from "../types";

export const register = async (
  inputs: RegisterInput,
): Promise<RegisterResponse> => {
  return fetchInstance<LoginResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify(inputs),
  }); // No token needed for registration
};

export const login = async (inputs: LoginInput): Promise<LoginResponse> => {
  return fetchInstance<LoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(inputs),
  }); // No token needed for login
};
