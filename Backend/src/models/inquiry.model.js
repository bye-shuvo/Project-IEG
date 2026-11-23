import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: /^\S+@\S+\.\S+$/,
    },
    organization: { type: String, trim: true, maxlength: 150, default: '' },
    interestedIn: { type: String, required: true, trim: true, default: 'General enquiry' },
    goals: { type: String, required: true, trim: true, maxlength: 2000 },
  },
  { timestamps: true }
);

const Inquiry = mongoose.model('Inquiry', inquirySchema);

export default Inquiry;