// getting-started.js
import { connect } from 'mongoose';
import 'dotenv/config'
const url = process.env.DB_Connection

main().catch(err => console.log(err));

export async function main() {
  await connect(url);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}