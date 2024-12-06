import { createProxyMiddleware } from "http-proxy-middleware";
import { GAMES_SERVICE_URL } from "../config/index.js";
import { handleProxyRes } from "../utils/handleProxyRes.js";

const proxyMiddleware = createProxyMiddleware({
    target: GAMES_SERVICE_URL,
    changeOrigin: true,
    on: {
        proxyRes: (proxyRes, req, res) => handleProxyRes(proxyRes, req, res)
    }
});

const gamesProxy = proxyMiddleware;

export default gamesProxy;
