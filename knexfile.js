module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data.db'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './data.db'
    },
    useNullAsDefault: true
  }
};
