import { doCacheURL } from "./doCacheURL.js";
import redisClient from "./redisConfig.js";

export const handleProxyRes = async (proxyRes, req, res) => {
    const key = req.originalUrl;
    let responseBody = "";

    proxyRes.on("data", (chunk) => {
        responseBody += chunk;
    });

    proxyRes.on("end", async () => {
        if (doCacheURL(req.originalUrl)) {
            try {
                await redisClient.set(key, responseBody, {
                    EX: 60 * 60 * 24
                });
            } catch (err) {
                console.error("Error caching response:", err);
            }
        }
        proxyRes.pipe(res);
    });
};
