import crypto from 'crypto';
import { Router } from 'express';
import { createInquiry, getInquiries } from '../controllers/inquiry.controller.js';

const requireAdmin = (req, res, next) => {
  const expected = process.env.ADMIN_API_KEY;
  if (!expected) {
    console.error('ADMIN_API_KEY is not set');
    return res
      .status(500)
      .json({ success: false, message: 'Something went wrong. Please try again later.' });
  }
  const provided = Buffer.from(req.header('x-admin-key') || '');
  const secret = Buffer.from(expected);
  if (provided.length !== secret.length || !crypto.timingSafeEqual(provided, secret)) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }
  next();
};

const router = Router();

router.post('/', createInquiry);
router.get('/', requireAdmin, getInquiries);

export default router;
