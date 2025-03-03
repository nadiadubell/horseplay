require('dotenv').config();
const { Pool, Client } = require('pg');
// const connectionString =
//   process.env.DATABASE_URL || 'http://localhost:5432/horseplay-dev';

const NAME = process.env.DB_NAME;
const PASSWORD = process.env.DB_PW;

const client = new Pool({
  user: 'postgres',
  host: 'db.gjtbyfkrwxbwplglkcre.supabase.co',
  database: NAME,
  password: PASSWORD,
  port: 5432,
  ssl: false,
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
