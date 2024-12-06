import { createProxyMiddleware } from "http-proxy-middleware";
import { MAILING_SERVICE_URL } from "../config/index.js";
import { handleProxyRes } from "../utils/handleProxyRes.js";

const mailingProxy = createProxyMiddleware({
    target: MAILING_SERVICE_URL,
    changeOrigin: true,
    on: {
        proxyRes: (proxyRes, req, res) => handleProxyRes(proxyRes, req, res)
    }
});

export default mailingProxy;
