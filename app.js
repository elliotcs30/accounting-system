const express = require('express') // 載入 express 並建構應用程式伺服器
const mongoose = require('mongoose') // 載入 mongoose
const exphbs = require('express-handlebars')
const Item = require('./models/item') // 載入 Item model

const app = express()

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true}) // 設定連線到 mongoDB

// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// 設定首頁路由
app.get('/', (req, res) => {
  Item.find() // 取出 Item model 裡的所有資料
    .lean()   // 把 Mongoose 的 Model 物件轉換成乾淨的 JS 資料陣列
    .then(items => res.render('index', { items })) // 將資料傳給 index 樣板
    .catch(err => console.log(err)) // 錯誤處理
})

// 設定 port 3000
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})