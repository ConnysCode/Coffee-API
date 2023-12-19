import { Elysia } from "elysia";
import iced from "./sources/iced";
import hot from "./sources/hot";
import { cors } from "@elysiajs/cors";

const app = new Elysia()
  .use(cors({ origin: true }))
  .get("/iced", () => iced)
  .get("/hot", () => hot)
  .listen(3000);

console.log(
  `Coffee API is running at ${app.server?.hostname}:${app.server?.port}`
);
