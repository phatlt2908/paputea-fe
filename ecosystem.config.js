module.exports = {
  apps: [
    {
      name: "paputea nextjs",
      max_memory_restart: "500M",
      restart_delay: 20000,
      exp_backoff_restart_delay: 100,
      max_restarts: 16,
      min_uptime: 5000,

      env: {
        NODE_ENV: "development",
        script: "npm run dev",
      },
      env_production: {
        NODE_ENV: "production",
        script: "npm start",
      },
    },
  ],
};
