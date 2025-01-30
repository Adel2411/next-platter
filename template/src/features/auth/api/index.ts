import fetchInstance from "@/lib/api";
import {
  LoginCredentials,
  LoginResponse,
  RegisterCredentials,
  RegisterResponse,
  UserProfileResponse,
} from "../types";

export const login = async (
  credentials: LoginCredentials,
): Promise<LoginResponse> => {
  return fetchInstance<LoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  }); // No token needed for login
};

export const getUserProfile = async (): Promise<UserProfileResponse> => {
  return fetchInstance<UserProfileResponse>(
    "/user/profile",
    { method: "GET" },
    "token",
  ); // Token required
};

export const register = async (
  userDetails: RegisterCredentials,
): Promise<RegisterResponse> => {
  return fetchInstance<LoginResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify(userDetails),
  }); // No token needed for registration
};
