import { z } from "zod";

// Password validation regex
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const passwordErrorMessage =
  "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character";

// Full name validation regex
const fullNameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
const fullNameErrorMessage =
  "Full name must contain only alphabetic characters and spaces";

// Username validation regex
const usernameRegex = /^[A-Za-z][A-Za-z0-9]*$/;
const usernameErrorMessage =
  "Username must start with an alphabetic character, can contain numbers, and cannot have spaces";

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
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(passwordRegex, passwordErrorMessage),
    confirmPassword: z
      .string()
      .min(8, "Confirm Password must be at least 8 characters long")
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
      .min(8, "Password must be at least 8 characters long")
      .regex(passwordRegex, passwordErrorMessage),
  })
  .refine(
    (data) =>
      data.identifier.includes("@")
        ? z.string().email().safeParse(data.identifier).success
        : true,
    {
      message: "Invalid email address",
      path: ["identifier"],
    },
  );

export { registerSchema, loginSchema };
