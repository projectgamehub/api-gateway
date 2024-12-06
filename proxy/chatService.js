import { createProxyMiddleware } from "http-proxy-middleware";
import { CHAT_SERVICE_URL } from "../config/index.js";

const chatProxy = createProxyMiddleware({
    target: CHAT_SERVICE_URL,
    changeOrigin: true
});

export default chatProxy;
