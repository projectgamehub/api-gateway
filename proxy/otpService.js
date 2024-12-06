import { createProxyMiddleware } from "http-proxy-middleware";
import { OTP_SERVICE_URL } from "../config/index.js";

const otpProxy = createProxyMiddleware({
    target: OTP_SERVICE_URL,
    changeOrigin: true
});

export default otpProxy;
