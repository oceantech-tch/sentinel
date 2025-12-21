import dotenvx from "@dotenvx/dotenvx";
dotenvx.config();

import express from "express";
import connectDb from "./config/connectDb.js";

import authRoutes from "./modules/auth/auth.routes.js";
import taskRoutes from "./modules/tasks/task.routes.js";
import { globalErrorHandler } from "./middlewares/error.middleware.js";

const PORT = process.env.PORT || 4032;

const startServer = async () => {
  try {
    await connectDb();

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get("/api/v1", (req, res) => {
      res.send("Welcome, Task Management System Active");
    });

    app.use("/api/v1/auth", authRoutes);
    app.use("/api/v1/tasks", taskRoutes);

    app.use(globalErrorHandler);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Server startup failed ❌", err);
    process.exit(1);
  }
};

startServer();