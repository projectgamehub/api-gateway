import { createProxyMiddleware } from "http-proxy-middleware";
import { TIC_TAC_TOE_SERVICE_URL } from "../config/index.js";

const ticTacToeProxy = createProxyMiddleware({
    target: TIC_TAC_TOE_SERVICE_URL,
    changeOrigin: true
});

export default ticTacToeProxy;
