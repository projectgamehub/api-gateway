import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const USER_SERVICE_URL = process.env.USER_SERVICE_URL;
const FRIEND_SERVICE_URL = process.env.FRIEND_SERVICE_URL;
const GAMES_SERVICE_URL = process.env.GAMES_SERVICE_URL;

export { PORT, USER_SERVICE_URL, GAMES_SERVICE_URL, FRIEND_SERVICE_URL };
