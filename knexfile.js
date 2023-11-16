require('dotenv').config();
const DATABASE_URL = process.env.DATABASE_URL;
const PGHOST = process.env.PGHOST;
const PGPORT = process.env.PGPORT;
const PGUSER = process.env.PGUSER;
const PGDATABASE = process.env.PGDATABASE;
const PGPASSWORD = process.env.PGPASSWORD;

//const FILENAME = process.env.DATABASE_FILENAME || 'database.sqlite';

module.exports = {
  client: 'pg',
  connection: {
    connectionString: DATABASE_URL,
    host: PGHOST,
    port: PGPORT,
    user: PGUSER,
    database: PGDATABASE,
    password: PGPASSWORD,
  },
  //useNullAsDefault: true,
};
