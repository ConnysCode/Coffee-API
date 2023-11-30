import { Elysia } from "elysia";
import iced from "./sources/iced";
import hot from "./sources/hot";

const app = new Elysia()
  .get("/iced", () => iced)
  .get("/hot", () => hot)
  .listen(3000);

console.log(
  `Coffee API is running at ${app.server?.hostname}:${app.server?.port}`
);
