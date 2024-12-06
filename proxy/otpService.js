import { createProxyMiddleware } from "http-proxy-middleware";
import { OTP_SERVICE_URL } from "../config/index.js";
import { handleProxyRes } from "../utils/handleProxyRes.js";

const otpProxy = createProxyMiddleware({
    target: OTP_SERVICE_URL,
    changeOrigin: true,
    on: {
        proxyRes: (proxyRes, req, res) => handleProxyRes(proxyRes, req, res)
    }
});

export default otpProxy;
