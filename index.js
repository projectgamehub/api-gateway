import express from "express";
import cors from "cors";
import { PORT } from "./config/index.js";
import {
    ticTacToeProxy,
    otpProxy,
    mailingProxy,
    chatProxy,
    friendProxy,
    gamesProxy,
    userProxy
} from "./proxy/index.js";
const app = express();

// TODO - Configure this later
const corsOptions = {
    origin: "*",
    methods: "*",
    allowedHeaders: ["Content-Type", "Authorization", "access-token"], // Allowed headers
    credentials: true
};
app.use(cors(corsOptions));

app.use("/games", gamesProxy);

app.use("/user", userProxy);

app.use("/friend", friendProxy);

app.use("/chat", chatProxy);

app.use("/mailing", mailingProxy);

app.use("/otp", otpProxy);

app.use("/tic-tac-toe", ticTacToeProxy);

app.listen(PORT);
