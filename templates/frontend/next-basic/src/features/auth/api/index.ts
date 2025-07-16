"use server";

import fetchInstance from "@/lib/api";
import {
  ForgotPasswordBody,
  ForgotPasswordResponse,
  LoginBody,
  LoginResponse,
  RegisterBody,
  RegisterResponse,
  VerifyEmailBody,
  VerifyEmailResponse,
} from "../types";
import { cookies } from "next/headers";

// Mock functions
export const setToken = async () => {
  (await cookies()).set("token", "abcd1234");
};

export const deleteToken = async () => {
  (await cookies()).delete("token");
};

// Real functions
export const register = async (
  body: RegisterBody,
): Promise<RegisterResponse> => {
  return fetchInstance<LoginResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify(body),
  }); // No token needed for registration
};

export const login = async (body: LoginBody): Promise<LoginResponse> => {
  return fetchInstance<LoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(body),
  }); // No token needed for login
};

export const verifyEmail = async (
  body: VerifyEmailBody,
): Promise<VerifyEmailResponse> => {
  return fetchInstance<VerifyEmailResponse>("/auth/verify-email", {
    method: "POST",
    body: JSON.stringify(body),
  }); // Token needed for verifying email
};

export const forgotPassword = async (
  body: ForgotPasswordBody,
): Promise<ForgotPasswordResponse> => {
  return fetchInstance<ForgotPasswordResponse>("/auth/forgot-password", {
    method: "POST",
    body: JSON.stringify(body),
  }); // No token needed for forgot password
};
