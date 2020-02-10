# onion

https://buildersbox.corp-sansan.com/entry/2019/07/10/110000

- presentation
- service
- application
- domain
- persistance
- infrastructure

## presentation

web(html,css,javascript)と対応付けられるコントローラー
クライアントとの設定となる。

html: ビュー
javascript: コントローラー、ビューに値を受け渡す。インターフェースで実装はs applicationに組み込まれる。

具体的なデータソースは指定しない。

## service

webAPIを提供する。
クライアントとの設定となる。

## application

webとAPIから共通して呼ばれるロジック。例えば、売り上げを計上する、顧客リストを取得する、などが該当する。
ユーザー認証もここ？

## domain

エンティティが含まれる。例えば顧客だったり、売上。業務に関連するクラスそのものが格納されている。

## persistance
データベースへのアクセスと永続化が責務です。applicationから受け取ったデータでクエリを発行したり、永続化することが役割です。
O/Rマッパーなども入る。

## infrastructure
外部のデータソースを扱っている。外部APIなどとの繋がり。

## 重要なこと

- 依存は外からうちへ
- 処理の流れは、外から内へ行ったのち、最終的には外側へいく。
- 
