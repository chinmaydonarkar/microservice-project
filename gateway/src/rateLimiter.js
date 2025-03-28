const rateLimit = require("express-rate-limit");
const RedisStore = require("rate-limit-redis").default; // Fix here
const Redis = require("ioredis");

const redisClient = new Redis({ host: "redis", port: 6379 });

module.exports = rateLimit({
  store: new RedisStore({ sendCommand: (...args) => redisClient.call(...args) }),
  windowMs: 60 * 1000, // 1 minute
  max: 2000, // 2000 requests per minute
  message: { error: "Too many requests, please try again later" },
});
