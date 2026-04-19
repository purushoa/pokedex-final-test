const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

// --- ADD THESE TWO ROUTES ---
app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('1') // change this to '2' later to test deployment
})
// ----------------------------

app.listen(PORT, () => {
  // console.log(`server started on port ${PORT}`)
})