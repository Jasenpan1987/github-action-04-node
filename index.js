import dotenv from "dotenv";

if (process.env.NODE_ENV === "local") {
  dotenv.config({ path: `./.env` });
}

const bootstrap = await import("./app.js");
bootstrap.default();
