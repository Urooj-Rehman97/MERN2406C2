import 'dotenv/config'
import { MongoClient } from 'mongodb';
const url = process.env.DB_Connection;

const client = new MongoClient(url)

async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch(e) {
      // Ensures that the client will close when you finish/error
      console.log(e);
      await client.close();
    }
  }

  run()

  export const database = client.db("crud2406c2")