# 記帳系統 Side Project - 2022.08.21

## 專案功能
  * 顯示每筆帳目
  * 


## 安裝套件
  * node v16.15.1
  * Express v4.17.1
  * mongoose v6.0.4


## 執行專案
1. 將本專案 clone 到本地端

2. 安裝套件
```shell
  npm i express@4.17.1
  npm i mongoose@6.0.4 # Mac M1 chip
```

3. 資料庫連線設定，本專案使用 Robo 3T GUI:
```shell
  export MONGODB_URI="mongodb+srv://<your name>:<your password>@cluster0.ayhtm.mongodb.net/accounting-system?retryWrites=true&w=majority"
```

4. 新增種子資料到資料庫，在終端機執行:
```shell
  npm run seed
```

5. 種子資料新增成功，會看到以下訊息:
```shell
  create seeds done!
```

6. 啟動伺服器
```shell
  npm run start
```

7. 終端機啟動成功會顯示以下訊息
```node
  App is running on http://localhost:3000
  mongodb connected!
```
