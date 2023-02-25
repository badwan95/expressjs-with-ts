module.exports = {
  apps: [
    {
      name: 'Express With Typescript',
      script: './dist/index.js',
      instances: 'max',
      autorestart: true,
      watch: false,
      exec_mode: 'cluster',
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
