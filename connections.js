const redis = require("redis");

module.exports = {
  createConnection: () => {
    return new Promise((resolve, reject) => {
      const client = redis.createClient(process.env.REDIS_URL);

      client.on("connect", () => {
        resolve(client);
      });

      client.on("Error", () => {
        reject("Error: Failed to connect");
      });
    });
  }
};
