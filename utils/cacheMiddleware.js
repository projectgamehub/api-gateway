import { doCacheURL } from "./doCacheURL.js";
import redisClient from "./redisConfig.js";

const cacheMiddleware = async (req, res, next) => {
    if (doCacheURL(req.originalUrl)) {
        try {
            const key = req.originalUrl;

            const cachedData = await redisClient.get(key);

            if (cachedData) {
                const parsedData = JSON.parse(cachedData);
                console.log("Cache hit");
                return res
                    .status(parsedData?.statusCode || 200)
                    .json(JSON.parse(cachedData));
            }
            console.log("Cache miss");
        } catch (error) {
            console.error("Redis caching middleware error:", error);
        }
    }
    next();
};

export default cacheMiddleware;
