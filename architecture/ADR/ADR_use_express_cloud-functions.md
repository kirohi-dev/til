# ADRをexpressとcloud functionsを使って実装する例

## ディレクトリ構造

━┯━ action (リクエストを受け取り,domainとやりとりをしてデータを作成)
 ┝━ domain (ロジック部分)
 ┝━ middleware (varidatorなど)
 ┝━ responder (Actionからデータを受け取り、レスポンスを作成)
 ┝━ type (interface,typeを入れる)
 ┝━ router (express.Routerの処理部分)
 ┗━ index.ts (エントリーポイント)

## それぞれの役割 (エントリーポイントから)

雰囲気で書いているのでts的な間違いあります。
適宜よみかえ必要。

### ./index.ts

リクエスト受け取って、routerに渡す

```
import * as functions from 'firebase-functions';
import * as express from 'express';

const app = express();
const cors = require('cors');
const router = require('./router');

app.use(cors());
app.use('/', router);

export const api = functions.region('asia-notheast1').https.onRequest(app);
```

### ./router

#### ./router/example/sample.ts

routerの実装部分

```
import { Router, Request, Response } from 'express';
import ExampleAction from '@/action/ExampleAction';
import ExampleService from '@/domain/ExampleService';
import ExampleResponder from '@/responder/ExampleResponder';

const router = Router();

router.get(path.join(__dirname, __filename), (req: Request, res: Response) => {
  const action = new ExampleAction(new ExampleService(), new ExampleResponder());
  action.invole(req, res);
});

export const sample = {
  router
};
```

#### ./router/example/index.ts

exampleを一つのファイルにまとめる

```
import { sample } from './example';

export const example = [login];
```

#### ./router/index.ts

```
import { example } './example';

const baseArray = [];

export const router = baseArray.concat(example);
```

### ./action

domainとやりとりをしてresponderにデータを渡す
builder的な役割？

### ./action/ExampleAction
```
import { Request, Response } 'express';
import ExampleResponder from  '@/responder/example';
import ExampleService from '@/domain/ExampleService';

export default class ExampleAction {
  private responder: ExampleResponder;
  private service: ExampleService;

  constractor(responder: ExampleResponder, service: ExampleService) {
    this.responder = responder;
    this.service = service;
  }

  invoke(_:Request, response: Response) {
    this.responder.invoke(this.service.getExample, response);
  }
}
```

### domain

ビジネスロジックのため省略、domainとserviceまで丸っと入っている感じ
ここはプロジェクトによって違いそう


### responder

データを受け取り、responseを作る

```
import { Response } from 'express';

export class ExampleResponder {
  async invoke(domainData, response: Response) {
    domainData.then(data => {
      if (data == null) {
        response.status(500).send({
          success: false,
          message: 'failed',
        });
        return;
      } 
      if (data.length == 0) {
        response.send({
          success: true,
          data: [],
        })
        return;
      }
      responder.send({
        success: true,
        data,
      })
    })
  }
}
```
