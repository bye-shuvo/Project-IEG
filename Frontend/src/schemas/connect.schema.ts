import { z } from 'zod'

export const inquirySchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Max 100 characters'),
  email: z.string().trim().toLowerCase().regex(/^\S+@\S+\.\S+$/, 'Enter a valid email'),
  organization: z.string().trim().max(150, 'Max 150 characters'),
  interestedIn: z.string().trim().min(1, 'Select an option'),
  goals: z.string().trim().min(1, 'Goals are required').max(2000, 'Max 2000 characters'),
})

export type InquiryFormValues = z.infer<typeof inquirySchema>

