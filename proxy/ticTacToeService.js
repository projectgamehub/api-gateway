import { createProxyMiddleware } from "http-proxy-middleware";
import { TIC_TAC_TOE_SERVICE_URL } from "../config/index.js";
import { handleProxyRes } from "../utils/handleProxyRes.js";

const ticTacToeProxy = createProxyMiddleware({
    target: TIC_TAC_TOE_SERVICE_URL,
    changeOrigin: true,
    on: {
        proxyRes: (proxyRes, req, res) => handleProxyRes(proxyRes, req, res)
    }
});

export default ticTacToeProxy;
