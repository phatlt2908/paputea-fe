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

      env: {
        NODE_ENV: "development",
        args : "start"
      },
      env_production: {
        NODE_ENV: "production",
        args : "start"
      },
    },
  ],
};
