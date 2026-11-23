import express from "express";
import cors from "cors";
import InquiryRoute from "./routes/inquiry.routes.js";

const app = express();

app.use(
  express.json({ origin: process.env.CLIENT_URL || "http://localhost:5173" }),
);
app.use(cors({}));
app.use("/api/v1/inquiry", InquiryRoute);

export default app;
