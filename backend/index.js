import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import router from "./routes/UserRoute.js";
config();
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected Successfully");
    app.listen(PORT, () => {
      console.log(`Server running on http://127.0.0.1:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error", err);
  });
const app = express();
const PORT = process.env.PORT || 7000;
app.use(express.json());
app.use("/api/user",router);
