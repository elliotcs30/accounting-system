const mongoose = require('mongoose')
const Schema = mongoose.Schema
const itemSchema = new Schema({
  // 資料型別是字串, 這是個必填欄位
  Investors: { type: String, required: true },   // 出資人
  item: { type: String, required: true},         // 項目
  amount: { type: Number, required: true },      // 金錢
  paymentUser: { type: String, required: true},  // 付款
  settleAccount: { type: String, required: true} // 結算
})

module.exports = mongoose.model('Item', itemSchema)