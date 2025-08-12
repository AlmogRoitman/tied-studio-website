import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "השם חייב להכיל לפחות 2 תווים")
    .max(50, "השם לא יכול להכיל יותר מ-50 תווים"),
  email: z
    .string()
    .email("כתובת אימייל לא תקינה")
    .min(1, "אימייל הוא שדה חובה"),
  phone: z
    .string()
    .min(10, "מספר טלפון חייב להכיל לפחות 10 ספרות")
    .regex(/^[0-9-+\s()]+$/, "מספר טלפון לא תקין"),
  weddingDate: z
    .string()
    .min(1, "תאריך החתונה הוא שדה חובה"),
  message: z
    .string()
    .min(10, "ההודעה חייבת להכיל לפחות 10 תווים")
    .max(1000, "ההודעה לא יכולה להכיל יותר מ-1000 תווים"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;