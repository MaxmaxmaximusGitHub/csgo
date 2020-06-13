import {Pool} from 'pg'


const db = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DB_NAME,
  port: process.env.PG_PORT,
})


db.connect(async function (err) {
  if (err) throw err
})


export default db

