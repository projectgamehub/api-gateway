import rateLimit from "express-rate-limit";
import RedisStore from "rate-limit-redis";
import redisClient from "./redisConfig.js";

const rateLimiter = (time, maxRequests) => {
    return rateLimit({
        store: new RedisStore({
            sendCommand: (...args) => redisClient.sendCommand(args)
        }),
        windowMs: time,
        max: maxRequests,
        keyGenerator: (req, _) => `rl:::${req.ip}:::${req.originalUrl}`,
        message: "Too many requests. Please try again later.",
        standardHeaders: true,
        legacyHeaders: false
    });
};

export default rateLimiter;
