import {z} from 'zod';

export const FormDataSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, {message: 'Password must be at least 8 characters.'}),
});

export const ResearchFormSchema = z.object({
  trending_keyword: z.string().min(2, {
    message: 'Query must be at least 2 characters.',
  }),
  industry: z.string().min(2, {
    message: 'Industry must be at least 2 characters.',
  }),
  purpose: z.string().min(2, {
    message: 'Purpose must be at least 2 characters.',
  }),
  note: z.string().optional(),
});
