import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: "Name is Required.",
    }),
    email: string({
      required_error: "Password is required",
    }).email("Incvalid email"),
    password: string({
      required_error: "Password is Required",
    }).min(6, "Password too short - Must be atleast 6 characters long"),
    confirmPassword: string({
      required_error: "Password confirmation is required.",
    }),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }),
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.confirmPassword"
>;
