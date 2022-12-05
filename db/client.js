const { Pool, Client } = require('pg');
// const connectionString =
//   process.env.DATABASE_URL || 'http://localhost:5432/horseplay-dev';

const DATABASE_URL = process.env.DB_URL;
const PASSWORD = process.env.DB_PW;

const client = new Pool({
  user: 'ndubell01',
  host: 'db.bit.io',
  database: DATABASE_URL,
  password: PASSWORD, // key from bit.io database page connect menu
  port: 5432,
  ssl: true,
});

// const client = new Pool({
//   connectionString,
//   ssl:
//     process.env.NODE_ENV === 'production'
//       ? {
//           rejectUnauthorized: false,
//         }
//       : undefined,
// });

// const client = new Client(
// {
// connectionString
//   ssl:
//     process.env.NODE_ENV === 'production'
//       ? { rejectUnauthorized: false }
//       : undefined,
// }
// );

module.exports = client;
