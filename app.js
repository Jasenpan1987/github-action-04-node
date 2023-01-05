import bodyParser from "body-parser";
import express from "express";
import eventRoutes from "./routes/events.js";

export default function bootstrap() {
  const app = express();
  app.use(bodyParser.json());
  app.use(eventRoutes);
  app.listen(process.env.PORT || 4000);
}
