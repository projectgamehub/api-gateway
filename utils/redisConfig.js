import { createClient } from "redis";
import { REDIS_PASS, REDIS_USERNAME } from "../config/index.js";

const client = createClient({
    username: REDIS_USERNAME,
    password: REDIS_PASS,
    socket: {
        host: "redis-15169.c264.ap-south-1-1.ec2.redns.redis-cloud.com",
        port: 15169
    }
});

client.on("error", (err) => console.log("Redis Client Error", err));

await client.connect();

export default client;
