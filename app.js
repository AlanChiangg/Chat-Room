const express = require('express')
const { engine } = require('express-handlebars')
const path = require('path');
const http = require('http')
const socketio = require('socket.io')
const routes = require('./routes')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.engine('hbs', engine({ extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')))

require('./sockets/sockets')(io)

app.use(routes)

const PORT = process.env.PORT || 3000

server.listen(PORT, () => console.log(`Server running on port ${PORT}!`))