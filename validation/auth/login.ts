import { z } from "zod"
import { emailField, requiredString } from "../helper"

export const loginSchema = z.object({
    email: emailField(),
    password: requiredString("Password", 6),
})

export type TLoginSchema = z.infer<typeof loginSchema>