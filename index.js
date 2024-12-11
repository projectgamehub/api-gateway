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
import cacheMiddleware from "./utils/cacheMiddleware.js";
import rateLimiter from "./utils/rateLimiter.js";

const app = express();

// TODO - Configure this later
const corsOptions = {
    origin: "*",
    methods: "*",
    allowedHeaders: ["Content-Type", "access-token"]
};

app.use(cors(corsOptions));
app.use(cacheMiddleware);

app.use("/games", gamesProxy);

app.use("/user", userProxy);

app.use("/friend", friendProxy);

app.use("/chat", chatProxy);

const generalLimiter = rateLimiter(60 * 1000, 15);
app.use(generalLimiter);

app.use("/mailing", mailingProxy);

app.use("/otp", otpProxy);

app.use("/tic-tac-toe", ticTacToeProxy);

app.listen(PORT);
