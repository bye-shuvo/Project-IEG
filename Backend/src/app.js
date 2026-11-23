import express from "express";
import cors from "cors";
import connectDB from "./config/database.js";
import InquiryRoute from "./routes/inquiry.routes.js";

const app = express();

app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("Database connection middleware error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong. Please try again later." });
  }
});

app.use(
  express.json({ origin: process.env.CLIENT_URL || "http://localhost:5173" }),
);
app.use(cors({}));
app.use("/api/v1/inquiry", InquiryRoute);

export default app;
