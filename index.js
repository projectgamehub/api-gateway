import express from "express";
import { PORT } from "./config/index.js";
import { friendProxy, gamesProxy, userProxy } from "./proxy/index.js";
const app = express();

app.use("/games", gamesProxy);

app.use("/user", userProxy);

app.use("/friend", friendProxy);

app.listen(PORT);
