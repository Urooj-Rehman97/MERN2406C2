// getting-started.js
import { connect } from 'mongoose';

main().catch(err => console.log(err));

export async function main() {
  await connect('mongodb+srv://UroojRehman:urooj123@cluster0.dh39c6v.mongodb.net/mongoose2406c2?appName=Cluster0');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}