import dotenv from "dotenv";

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "local") {
  dotenv.config({ path: `./.env` });
}

const bootstrap = await import("./app.js");
bootstrap.default();
