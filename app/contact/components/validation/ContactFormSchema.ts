import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Phone number is too short"), // you can add regex for stricter validation
  message: z.string().min(10, "Message must be at least 10 characters long"),
  services: z.object({
    websiteDesign: z.boolean(),
    uxDesign: z.boolean(),
    userResearch: z.boolean(),
    contentCreation: z.boolean(),
    strategyConsulting: z.boolean(),
    other: z.boolean(),
  }),
});

// Export TypeScript type for use in form
export type ContactFormSchema = z.infer<typeof contactFormSchema>;
