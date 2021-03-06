import express from 'express'
import path from 'path'

const app = express()

app.use(express.static(path.join(__dirname, '../../frontend/build')))

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../../frontend/build/index.html')))

export default app
