import { createProxyMiddleware } from "http-proxy-middleware";
import { GAMES_SERVICE_URL } from "../config/index.js";
import { handleProxyRes } from "../utils/handleProxyRes.js";
import rateLimiter from "../utils/rateLimiter.js";

const gamesLimiter = rateLimiter(2 * 60 * 1000, 30);

const proxyHandler = createProxyMiddleware({
    target: GAMES_SERVICE_URL,
    changeOrigin: true,
    on: {
        proxyRes: (proxyRes, req, res) => handleProxyRes(proxyRes, req, res)
    }
});

const gamesProxy = (req, res, next) => {
    gamesLimiter(req, res, () => proxyHandler(req, res, next));
};

export default gamesProxy;
