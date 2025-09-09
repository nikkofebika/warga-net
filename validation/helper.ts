import { z, ZodTypeAny } from "zod";

export const optionalStringTransform = (min: number = 0) =>
  z
    .string()
    .transform((val) => (val.trim() === "" ? undefined : val))
    .pipe(z.string().min(min).optional());

export const requiredString = (field: string, min?: number) => {
  const schema = z.string().nonempty({ message: `${field} wajib diisi` });

  return min ? schema.min(min, { message: `${field} minimal ${min} karakter` }) : schema;
}

export const emailField = () => z.email({ message: "Email tidak valid" });

export const fileSchema = ({
  optional = true,
  maxFileSize = 1024 * 1024 * 10, // default 10MB
  allowedMimeTypes = ["image/jpeg", "image/png", "image/svg+xml", "image/webp"], // default: jpg, png, svg, webp
}: {
  optional?: boolean;
  maxFileSize?: number;
  allowedMimeTypes?: string[];
} = {}) => {
  let schema: ZodTypeAny = z
    .instanceof(File, { message: "Please upload a valid file" })
    .refine(
      (file) => file.size <= maxFileSize,
      `File size must be less than ${Math.round(maxFileSize / (1024 * 1024))}MB`
    )
    .refine(
      (file) => allowedMimeTypes.includes(file.type),
      `File type must be one of: ${allowedMimeTypes.join(", ")}`
    );

  if (optional) {
    schema = schema.optional();
  }

  return schema;
};
