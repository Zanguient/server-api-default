const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = () => {
  let schema = mongoose.Schema({
    data: {
      type: Date,
      default: Date.now
    }
  })

  return mongoose.model('Default', schema, 'defaults')
}
