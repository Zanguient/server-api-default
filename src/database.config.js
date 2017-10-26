const mongoose = require('mongoose')

module.exports = (url) => {
  mongoose.createConnection(url)

  mongoose.connection.on('connected', () => {
    console.log('MongoDB conectado em ' + url)
  })

  mongoose.connection.on('disconnected', () => {
    console.log('MongoDB desconectado em ' + url)
  })

  mongoose.connection.on('error', (erro) => {
    console.log('MongoDB error! Problemas ao conectar. Erro:' + erro)
  })

  process.on('uncaughtException', (erro) => {
    console.log(erro)
  })

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('MongoDB desconectado pelo termino da aplicação')
      process.exit(0)
    })
  })

  mongoose.set('debug', true)
}
