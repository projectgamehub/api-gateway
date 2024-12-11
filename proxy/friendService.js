import { createProxyMiddleware } from "http-proxy-middleware";
import { FRIEND_SERVICE_URL } from "../config/index.js";
import { handleProxyRes } from "../utils/handleProxyRes.js";
import rateLimiter from "../utils/rateLimiter.js";

const friendLimiter = rateLimiter(2 * 60 * 1000, 60);

const proxyHandler = createProxyMiddleware({
    target: FRIEND_SERVICE_URL,
    changeOrigin: true,
    on: {
        proxyRes: (proxyRes, req, res) => handleProxyRes(proxyRes, req, res)
    }
});

const friendProxy = (req, res, next) => {
    friendLimiter(req, res, () => proxyHandler(req, res, next));
};

export default friendProxy;
