# DI&DI container

## 記事要約

https://qiita.com/ritukiii/items/de30b2d944109521298f

### 依存性の注入 -> オブジェクトの注入

A dependency is an object that can be used (a service).

### DIとDIコンテナは違う

DIはパターン、DIコンテナはフレームワーク


## DIとDI以外の違い

DI以外
```
class Sample
{
    const LOG_FILE_PATH = 'sample.log';

    private $logger = null;

    public function __construct()
    {
        $this->logger = new FileLogger();
        $this->logger->setFilePath(self::LOG_FILE_PATH);
    }

    public function doSomething()
    {
        // 何か処理
        // ログを残す
        $this->logger->info('doSomething successed!');
    }
}
```

DI
```
class Sample
{
    private $logger = null;

    public function __construct(LoggerInterface $logger)
    {
        $this->logger = $logger;
    }

    public function doSomething()
    {
        // 何か処理
        // ログを残す
        $this->logger->info('doSomething successed!');
    }
}
```

インスタンスを渡している。これが依存性(オブジェクト)の注入。

| DI以外 | Di |
---|---|---
| FileLoggerが実装出来るまで、Sampleが実装出来ない | FileLoggerがなくてもSampleの実装を進められる |
| FileLoggerからDatabaseLoggerに変える場合、Sampleを修正する必要がある |Sampleの呼び出し元を変えるだけでOK |
| SampleのdoSomethingのテストの度に、ファイルにログが吐かれる| モックを渡せば良いので、実際にファイルにログは吐かれない|

これはコンストラクタで注入したからコンストラクタインジェクション。
セッターインジェクション、メソッドインジェクション等、コンストラクタ以外から注入する方法もあります。

### DI

```
require_once __DIR__ . '/container.php';

// 通常にここでインスタンスを生成する場合
// $logger          = new FileLogger('/var/log/sample.log');
// $twitter         = new TwitterManager();
// $dbAuthenticator = new DatabaseUserAuthenticator();

// $sample = new Sample($logger, $twitter, $dbAuthenticator);

$sample = $container['sample'];
```



### DIコンテナとサービスロケーターは違う

```
<?php

require_once __DIR__ . '/vendor/autoload.php';

class Sample
{
    public function __construct($c)
    {
        $this->logger            = $c['file.logger']('sample.log');
        $this->sns               = $c['twitter.manager'];
        $this->userAuthenticator = $c['user.authenticator'];
    }
}

$sample = new Sample($container);
```

この場合、Sampleクラスは、３つのオブジェクトだけでなく、DIコンテナにも依存することになります。
それ故に、テストする際に毎回コンテナをテストダブルで置き換えて上げる必要が出てきて、若干面倒臭くなります。


DIコンテナを使えばコンストラクタなどでインジェクションする必要がなくなる。
オブジェクトをインジェクトすることは変わらないが、引数が多くなった場合もDIコンテナで
インジェクトをまとめるのでコンストラクタの引数が増えることはない？


## 要点
### DI

テストしやすくなるように、開発中に依存しないようにオブジェクトを渡すようにする。
コンストラクタやゲッターでnewしない。

constructでnewすると、テストする時に参照しているクラスをモックやスタブで渡すことができない。
そうなるとテストで責務わけできない。

### DIコンテナ

オブジェクトを渡す形にしても、引数が多かったり、引数の数が変更された場合、
参照されている数が多いと修正が大変になる。

そこで、インジェクトすることだけの責務をもつDIコンテナを活用する


## typescriptでDI

https://qiita.com/kn2018/items/f99f62cabfd31667b055
