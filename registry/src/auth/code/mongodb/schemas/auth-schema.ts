import { z } from "zod";

export const signUpSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 8 characters" }),
  username: z.string(),
});

export const signInSchema = z.object({
  identifier: z.string(),
  password: z.string(),
});


export const verifySchema = z.object({
  code: z
    .string()
    .length(6, { message: "Password must be at least 8 characters" }),
});
