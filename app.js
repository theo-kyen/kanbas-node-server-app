import "dotenv/config";
import express from "express";
import cors from "cors";
import Hello from "./hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";

const app = express();
const options = {
  credentials: true,
  origin: process.env.FRONTEND_URL,
};
app.use(cors());
app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);
