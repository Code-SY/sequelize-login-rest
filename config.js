// Application configuration.

const config = module.exports;

config.db = {
  user: 'root',
  password: 'abc123',
  name: 'defaultdb',
};

config.db.details = {
  host: 'mysql',
  port: 3306,
  dialect: 'mysql',
};

config.keys = {
  secret: 'changethis', // Should not be made public
};
