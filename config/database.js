module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'mysql-3huo'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'mysql'),
        username: env('DATABASE_USERNAME', '1bSmTSmhHUwD4lAPROHIbOKPKHYUfCdIXIJmfNoBOIg='),
        password: env('DATABASE_PASSWORD', 'mysql'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
