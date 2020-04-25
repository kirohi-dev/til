| method| 内容| 詳細 |
---|---|---|---
|FROM | ペースイメージの指定||
|RUN | コマンド実行|アプリケーション/ミドルウェアをインストール/設定する|
|CMD | コンテナの実行コマンド|
|LABEL | ラベルを設定|
|EXPOSE | ポートのエクスポート|
|ENV | 環境変数|
|ADD | ファイル/ディレクトリの追加|
|COPY | ファイルのコピー(ローカルファイルをコンテナに)|
|ENTRYPOINT | コンテナの実行コマンド|
|VOLUME | ボリュームのマウント|
|USER | ユーザーの指定|
|WORKDIR | 作業ディレクトリ|
|ARG | Dockerfile内の変数|
|STOPSIGNAL | システムコールシグナルの指定|
|HEALTHCHECK | コンテナのヘルスチェック|
|SHELL | デフォルトシェルの指定|


コメントは `#`でかく

実行順序はこの順序でなくていい

* RUN：ビルド時にコンテナ内で実行される
* CMD：完成したイメージからコンテナを作成するときに実行される

docker buildはdocker imageを作るコマンド



## 書き方

1. imageのビルド
2. dependencyをinstall
3. hostのソースコードをコンテナにコピー
4. build module
5. deploy module
