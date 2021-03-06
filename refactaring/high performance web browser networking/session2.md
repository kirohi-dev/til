# TCPの構成要素

インターネットの心臓部には、IPとTCPという2つのプロトコルが存在する。

- IP(Internet Protocol)
  - IPはホスト間のルーティングとアドレッシングを提供
- TCP(Transmission Contorol Protocol)
  - 信頼性の低い通信路上で信頼性の高い通信の抽象を提供する。

TCP/IPはインターネットプロトコルスイートと呼ばれることもある。

TCPは、
- 欠損パケットの再送
- 順序通りの転送
- 輻輳制御と回避
- データ完全性

ネットワーク通信の複雑さの大部分をアプリケーションから隠蔽する。

TCPはタイプリーな転送よりも正確な転送のために最適化されている。
しかし、この事実はブラウザにおけるパフォーマンス最適化を困難にする。

## 3ウェイハンドシェイク

 TCP接続は3ウェイハンドシェイクで開始する。

 クライアントとサーバーが情報の交換を開始する前に、最初のパケットのシーケンス番号や、接続に関する他の様々な変数に関して両者の合意が必要です。
 シーケンス番号はセキュリティ上の理由から両者により無造作に選ばれます。

 ```
 HOST(クライアント)     HOST2(サーバー)
    SYN --------------------> 
        <-------------------- SYN ACK
    ACK -------------------->
    データ  
```

### SYN
クライアントは無造作にシーケンス番号xを選び、SYNパケットを送信する。これには他のTCPフラグやオプションが含まれている。

### SYN ACK
サーバーはxに1を加えてその値を確認応答番号とする。そして自身のシーケンス番号を無造作に選び、自身のフラグとオプションを付加した上でレスポンスを送信する。

### ACK
クライアントはxとyの両方に1をたし、xをシーケンス番号,yを確認応答番号としたACKパケットを送信してハンドシェイクを完了する。

この手続きはTCPを使うアプリケーションのパフォーマンスと密接な関係がある。
新規接続では毎回パケット往復によって、データが送信可能になるまでのレイテンシが発生する。

これがTCPを利用するアプリケーションにとって接続の再利用が重要な最適化である理由。

### TFO(TCP Fast Open)

SYNパケット内でデータの転送を許可することでレイテンシを下げる。
ページ総読み込みにかかる時間を1０％削減することができる。

しかし、TFOが全ての解決してくれる訳ではない。
TFOは限られた場合にしか使うことができない。

- データ量の制限
- HTTPメソッドの制限
- また暗号化されたcookieが必要なので、初回は3ウェイハンドシェイクが必要


