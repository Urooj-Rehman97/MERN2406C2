import express from 'express';
import { main } from './Connection/Connection.mjs';
import cors from 'cors'
import myroutes from './Routes/Routes.mjs';
const app = express()
const port = 3000
app.use(express.json())
app.use(cors())

app.use("/api", myroutes)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})