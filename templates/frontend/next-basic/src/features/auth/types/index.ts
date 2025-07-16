import z from "zod";
import {
  forgotPasswordSchema,
  loginSchema,
  registerSchema,
  resetPasswordBodySchema,
  resetPasswordInputsSchema,
  resetPasswordSchema,
  verifyEmailSchema,
} from "../schema";

// Register types
export type RegisterInputs = z.infer<typeof registerSchema>;

export type RegisterBody = Omit<RegisterInputs, "confirmPassword">;

export interface RegisterResponse {
  accessToken: string;
  user: {
    id: string;
    fullName: string;
    email: string;
  };
}

// Login types
export type LoginInputs = z.infer<typeof loginSchema>;

export type LoginBody = LoginInputs;

export interface LoginResponse {
  accessToken: string;
  user: {
    id: string;
    fullName: string;
    email: string;
  };
}

// Verify email types
export type VerifyEmailInputs = z.infer<typeof verifyEmailSchema>;

export type VerifyEmailBody = VerifyEmailInputs;

export interface VerifyEmailResponse {
  message: string;
}

// Forgot password types
export type ForgotPasswordInputs = z.infer<typeof forgotPasswordSchema>;

export type ForgotPasswordBody = ForgotPasswordInputs;

export type ForgotPasswordResponse = {
  message: string;
};

// Reset password types
export type BaseResetPassword = z.infer<typeof resetPasswordSchema>;

export type ResetPasswordInputs = z.infer<typeof resetPasswordInputsSchema>;

export type ResetPasswordBody = z.infer<typeof resetPasswordBodySchema>;

export type ResetPasswordResponse = {
  message: string;
};
