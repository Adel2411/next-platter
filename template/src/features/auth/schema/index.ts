import { z } from "zod";

// Password validation regex
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
const passwordErrorMessage =
  "Password must be 8+ chars, include upper, lower, and number";

// Full name validation regex
const fullNameRegex = /^[A-Za-z\s]+$/;
const fullNameErrorMessage = "Full name must contain only letters and spaces";

// Username validation regex
const usernameRegex = /^[A-Za-z][A-Za-z0-9]*$/;
const usernameErrorMessage = "Username must start with a letter, no spaces";

// Register form schema
const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(1, "Full name is required")
      .regex(fullNameRegex, fullNameErrorMessage),
    username: z
      .string()
      .min(1, "Username is required")
      .regex(usernameRegex, usernameErrorMessage),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(8, "Password must be 8+ chars")
      .regex(passwordRegex, passwordErrorMessage),
    confirmPassword: z
      .string()
      .min(8, "Confirm Password must be 8+ chars")
      .regex(passwordRegex, passwordErrorMessage),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// Login form schema
const loginSchema = z
  .object({
    identifier: z.string().min(1, "Email or username is required"), // Identifier can be either email or username
    password: z
      .string()
      .min(8, "Password must be 8+ chars")
      .regex(passwordRegex, passwordErrorMessage),
  })
  .refine(
    (data) =>
      data.identifier.includes("@")
        ? z.string().email().safeParse(data.identifier).success
        : true,
    {
      message: "Invalid email",
      path: ["identifier"],
    },
  );

// Forgot password form schema
const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email"),
});

// Reset password form schema
const resetPasswordSchema = z
  .object({
    token: z.string().min(1, "Token is required"),
    password: z
      .string()
      .min(8, "Password must be 8+ chars")
      .regex(passwordRegex, passwordErrorMessage),
    confirmPassword: z
      .string()
      .min(8, "Confirm Password must be 8+ chars")
      .regex(passwordRegex, passwordErrorMessage),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// Verify email form schema with OTP code
const verifyEmailSchema = z.object({
  otp: z.number().int().positive("OTP must be positive"),
});

export {
  registerSchema,
  loginSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  verifyEmailSchema,
};
