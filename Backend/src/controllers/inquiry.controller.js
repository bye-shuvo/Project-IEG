import { z } from 'zod';
import Inquiry from '../models/inquiry.model.js';


//Zod is used for schema validation
const inquirySchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Max 100 characters'),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .regex(/^\S+@\S+\.\S+$/, 'Enter a valid email'),
  organization: z.string().trim().max(150, 'Max 150 characters').optional().default(''),
  interestedIn: z.string().trim().min(1, 'Select an option').default('General enquiry'),
  goals: z.string().trim().min(1, 'Goals are required').max(2000, 'Max 2000 characters'),
});

export const createInquiry = async (req, res) => {
  const parsed = inquirySchema.safeParse(req.body);

  if (!parsed.success) {
    const errors = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (field && !errors[field]) errors[field] = issue.message;
    }
    return res.status(400).json({ success: false, message: 'Validation failed', errors });
  }

  try {
    const inquiry = await Inquiry.create(parsed.data);
    return res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully',
      data: { id: inquiry._id },
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ success: false, message: 'Validation failed' });
    }
    console.error('createInquiry error:', error);
    return res
      .status(500)
      .json({ success: false, message: 'Something went wrong. Please try again later.' });
  }
};