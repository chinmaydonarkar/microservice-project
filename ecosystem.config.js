module.exports = {
    apps: [
      {
        name: "gateway",
        script: "./gateway/src/server.js",
        instances: "max",
        exec_mode: "cluster",
      },
      {
        name: "auth-service",
        script: "./services/auth-service/src/server.js",
        instances: 2,
      },
      {
        name: "order-service",
        script: "./services/order-service/src/server.js",
        instances: 2,
      },
    ],
  };
  