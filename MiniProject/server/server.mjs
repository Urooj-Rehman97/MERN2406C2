import express from 'express';
import { main } from './Connection/Connection.mjs';
import myroutes from './Routes/routes.mjs';
import cors from 'cors'
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use("/project", myroutes)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})