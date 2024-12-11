import { createProxyMiddleware } from "http-proxy-middleware";
import { CHAT_SERVICE_URL } from "../config/index.js";
import { handleProxyRes } from "../utils/handleProxyRes.js";
import rateLimiter from "../utils/rateLimiter.js";

const chatLimiter = rateLimiter(60 * 1000, 60);

const proxyHandler = createProxyMiddleware({
    target: CHAT_SERVICE_URL,
    changeOrigin: true,
    on: {
        proxyRes: (proxyRes, req, res) => handleProxyRes(proxyRes, req, res)
    }
});

const chatProxy = (req, res, next) => {
    chatLimiter(req, res, () => proxyHandler(req, res, next));
};

export default chatProxy;
