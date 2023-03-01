module.exports = {
  apps : [{
    name: 'paputea nextjs',
    script: 'npm',
    args: 'start',
    max_memory_restart: '500M',
    // watch: '.',
    // ignore_watch: ['node_modules', 'package-lock.json'],
    // watch_delay: 1000,
    restart_delay: 20000,
    exp_backoff_restart_delay: 100,
    max_restarts: 16,
    min_uptime: 5000
  }],

  // deploy : {
  //   production : {
  //     user : 'phatlt2908',
  //     host : 'localhost',
  //     ref  : 'origin/master',
  //     repo : 'git@github.com:phatlt2908/software-sharing-be.git',
  //     // path : 'DESTINATION_PATH',
  //     'pre-deploy-local': '',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
  //     'pre-setup': ''
  //   }
  // }
};
