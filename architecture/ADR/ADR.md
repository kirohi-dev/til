# Action-domain-responder

clsのリファクタリングのそれ

## Action

リクエストを受け取り、ドメインの処理結果をレスポンダに渡す

## domain

ビジネスロジック

## Responder

ドメインの処理結果を受け取り、必要な準備を行いレスポンスに返す。

## アーキテクチャの流れ

1. webハンドラがrequestを受け取る
2. Actionをdispatch
3. ActionはDomainとやりとりを行う
4. ActionはデータをResponderへ
5. ResponderはActionで生成されたデータを使ってresponseを作成
6. responseをクライアント返却
