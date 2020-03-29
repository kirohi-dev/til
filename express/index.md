# 基本

## HEllo World

```
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
```

## 基本的なルーティング

expressのインスタンスにメソッドとごとに返す関数処理を入れる。
```
app.get('/', function (req, res) {
  res.send('Hello World!');
});
```

## 静的ファイル

丸ごとアクセスできるようにする
```
app.use(express.static('public'));
```

## routerを分離
エントリーポイントが肥大化するので、
routerのみ分離する。

express.routerを使う。

router.js
```
const express = require('express');

module.exports = function(receiveFromAppJs){
    var router = express.Router();

    router.get('/foo', function(req, res){
        // ...
    });

    router.get('/bar', function(req, res){
        // ...
    });

    return router;
};
```

index.js
```
//...
app.use('/', require('./router.js'));
```


## CORS対策

cors middlewareを使う

`npm install cors`

### 全てのAPIをCORSで許可したい場合
```
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/user/:userId', function (req, res, next) {
  res.json({result: '任意のオリジンからすべてのAPIがアクセスOK'})
})
```

### 個別のAPIをCORSでk許可したい場合
```
const express = require('express')
const cors = require('cors')
const app = express()

app.get('/user/:userId', cors(), function (req, res, next) {
  res.json({result: '任意のオリジンからこのAPIのみアクセスOK'})
})
```

### CORSのオプション設定

設定可能なオプション：origin、methods、allowedHeaders、exposedHeaders、credentials、maxAge、preflightContinue、optionsSuccessStatus

```
const express = require('express')
const  cors = require('cors')
const app = express()

const corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 
}

app.get('/user/:userId', cors(corsOptions), function (req, res, next) {
  res.json({msg: 'example.comからのアクセスのみ許可'})
})
```
