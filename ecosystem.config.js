module.exports = {
  apps: [
    {
      name: "paputea nextjs",
      max_memory_restart: "500M",
      restart_delay: 20000,
      exp_backoff_restart_delay: 100,
      max_restarts: 16,
      min_uptime: 5000,
      script: "npm",
      args: "start",

      env: {
        NODE_ENV: "development",
        PORT: 3000,
        ...require("dotenv").config({ path: ".env.development" }).parsed,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 8080,
        ...require("dotenv").config({ path: ".env.production" }).parsed,
      },
    },
  ],
};
