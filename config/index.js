import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const USER_SERVICE_URL = process.env.USER_SERVICE_URL;
const FRIEND_SERVICE_URL = process.env.FRIEND_SERVICE_URL;
const GAMES_SERVICE_URL = process.env.GAMES_SERVICE_URL;
const OTP_SERVICE_URL = process.env.OTP_SERVICE_URL;
const MAILING_SERVICE_URL = process.env.MAILING_SERVICE_URL;
const CHAT_SERVICE_URL = process.env.CHAT_SERVICE_URL;
const TIC_TAC_TOE_SERVICE_URL = process.env.TIC_TAC_TOE_SERVICE_URL;

export {
    PORT,
    USER_SERVICE_URL,
    GAMES_SERVICE_URL,
    FRIEND_SERVICE_URL,
    OTP_SERVICE_URL,
    MAILING_SERVICE_URL,
    CHAT_SERVICE_URL,
    TIC_TAC_TOE_SERVICE_URL
};
