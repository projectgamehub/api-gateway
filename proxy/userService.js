import { createProxyMiddleware } from "http-proxy-middleware";
import { USER_SERVICE_URL } from "../config/index.js";
import { handleProxyRes } from "../utils/handleProxyRes.js";
import rateLimiter from "../utils/rateLimiter.js";

const loginLimiter = rateLimiter(2 * 60 * 1000, 5);
const requestOtpLimiter = rateLimiter(2 * 60 * 1000, 3);
const resendOtpLimiter = rateLimiter(2 * 60 * 1000, 3);
const submitOtpLimiter = rateLimiter(2 * 60 * 1000, 5);
const defaultLimiter = rateLimiter(2 * 60 * 1000, 120);

const proxyHandler = createProxyMiddleware({
    target: USER_SERVICE_URL,
    changeOrigin: true,
    on: {
        proxyRes: (proxyRes, req, res) => handleProxyRes(proxyRes, req, res)
    }
});

const userProxy = (req, res, next) => {
    const route = req.path;

    if (route === "/login") {
        return loginLimiter(req, res, () => proxyHandler(req, res, next));
    } else if (route === "/reset-password/request-otp") {
        return requestOtpLimiter(req, res, () => proxyHandler(req, res, next));
    } else if (route === "/reset-password/resend-otp") {
        return resendOtpLimiter(req, res, () => proxyHandler(req, res, next));
    } else if (route === "/reset-password/submit-otp") {
        return submitOtpLimiter(req, res, () => proxyHandler(req, res, next));
    }
    return defaultLimiter(req, res, () => proxyHandler(req, res, next));
};

export default userProxy;
