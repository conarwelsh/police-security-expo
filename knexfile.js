require('dotenv').config()

// Update with your config settings.
console.log('MYSQL CONFIG', {
  database: process.env.DB_DATABASE,
  user:     process.env.DB_USER,
  password: process.env.DB_PASS
})

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'policesecurity',
      user:     'root',
      password: ''
    },
    migrations: {
      tableName: 'migrations',
      directory: './migrations'
    },
    seeds: {
      directory: './seeds/dev'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: process.env.DB_DATABASE,
      user:     process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations',
      directory: './migrations'
    },
    seeds: {
      directory: './seeds/production'
    }
  }

};
