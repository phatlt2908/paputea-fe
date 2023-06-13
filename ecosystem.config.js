module.exports = {
  apps: [
    {
      name: "paputea nextjs",
      append_env_to_name: true,
      max_memory_restart: "500M",
      restart_delay: 20000,
      exp_backoff_restart_delay: 100,
      max_restarts: 16,
      min_uptime: 5000,
      script: "npm",
      args: "start",

      env_development: {
        NODE_ENV: "development",
        ...require("dotenv").config({ path: ".env.development" }).parsed,
      },
      env_production: {
        NODE_ENV: "production",
        ...require("dotenv").config({ path: ".env.production" }).parsed,
      },
    },
  ],
};
