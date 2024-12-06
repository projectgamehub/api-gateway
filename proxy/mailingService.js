import { createProxyMiddleware } from "http-proxy-middleware";
import { MAILING_SERVICE_URL } from "../config/index.js";

const mailingProxy = createProxyMiddleware({
    target: MAILING_SERVICE_URL,
    changeOrigin: true
});

export default mailingProxy;
