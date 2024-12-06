import { createProxyMiddleware } from "http-proxy-middleware";
import { FRIEND_SERVICE_URL } from "../config/index.js";
import { handleProxyRes } from "../utils/handleProxyRes.js";

const friendProxy = createProxyMiddleware({
    target: FRIEND_SERVICE_URL,
    changeOrigin: true,
    on: {
        proxyRes: (proxyRes, req, res) => handleProxyRes(proxyRes, req, res)
    }
});

export default friendProxy;
