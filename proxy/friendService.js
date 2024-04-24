import { createProxyMiddleware } from "http-proxy-middleware";
import { FRIEND_SERVICE_URL } from "../config/index.js";

const friendProxy = createProxyMiddleware({
    target: FRIEND_SERVICE_URL,
    changeOrigin: true
});

export default friendProxy;
