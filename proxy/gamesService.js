import { createProxyMiddleware } from "http-proxy-middleware";
import { GAMES_SERVICE_URL } from "../config/index.js";

const gamesProxy = createProxyMiddleware({
    target: GAMES_SERVICE_URL,
    changeOrigin: true
});

export default gamesProxy;
