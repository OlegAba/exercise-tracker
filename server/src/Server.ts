import dotenv from "dotenv";
import path from "path";
import { App } from "./App";
import { middlewares } from "./Middlewares";
import shorturlRouter from "./api/shorturl/Shorturl.Router";

dotenv.config();
const PORT = process.env.PORT || "8080";
const CONNECTION_URL = process.env.CONNECTION_URL;
const apiPath = "/api";
const buildPath = path.join(__dirname, "..", "..", "client", "build");

// Configure App
const app = new App(
  PORT, 
  middlewares,
  [shorturlRouter],
  apiPath,
  buildPath
);

// Connect to Mongo Database
CONNECTION_URL 
  ? app.connectMongoDB(CONNECTION_URL) 
  : console.log("NO CONNECTION_URL FOUND");

// Start
app.listen();