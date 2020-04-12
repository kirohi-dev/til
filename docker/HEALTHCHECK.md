# HEALTHCHECK

コンテナの正常性をどのように確かめるのかを設定する。

|オプション|説明 |デフォルト値 |
---|---|---|---
|--interval=n| ヘルスチェックの間隔| 30s|
|--timeout=n| ヘルスチェックのタイムアウト| 30s|
|--retries| タイムアウトの回数 | 3|

5分ごとい稼働中のwebサーバーのメインページを3秒以内に表示できるかどうか確認するためには、以下のようなものにする

```
HEALTHCHECK --interval=5m --timeout=3s CMD curl -f http://localhost/ || exit 1
```

ヘルスチェックの結果は`docker container inspect`で確認可能
