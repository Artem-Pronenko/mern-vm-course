const path = require('path')
const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const PORT = config.get('port') || 5005
const app = express()

app.use(express.json({extended: true}))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/link', require('./routes/link.routes'))
app.use('/t', require('./routes/redirect.routes'))

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

;(async () => {
  try {
    await mongoose.connect(config.get('mongoURI'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => {
      console.log('app start', PORT)
    })

  } catch (e) {
    console.log('Error', e.message)
    process.exit(1)
  }
})()
