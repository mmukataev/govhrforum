module.exports = {
  apps: [
    {
      name: 'govhr-frontend',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/frontend',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
};
