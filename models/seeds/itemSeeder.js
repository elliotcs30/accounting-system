const mongoose = require('mongoose')
const Item = require('../item') // 載入 item model
const itemList = require('../../accounting.json').results

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')

  Item.create(itemList)
    .then(() => {
      console.log('create seeds done!')
    })
    .catch(err => console.log(err))
})
