Docker

Docker file -> image -> container


https://www.slideshare.net/zembutsu/docker-compose-guidebook


Docker memo

Dockerは各OSなどの記憶領域にあるものを仮想でルート化する。(仮想のルートを作る)
その上でプロセスを走らせる。この仕組みをコンテナと呼ぶ

プロセスを走らせるとは、メモリに実行コードとデータを渡すこと。

Dockerのイメージはtarファイル。
それを複数積み重ねていく。ユーザーからは一つのイメージファイルに見える。
読み取り専用で、書き込むときはファイルをコピーして書き込む(コピーオンライト)
ネットワークは基本ブリッジでホストを経由して行われる（ブリッジがネットワーク）

コンテナはイメージファイル（OSやメタファイル（packageのインストールなど））を実行する

ボリュームはホスト側のファイルを見tに行くこと。
読み書きをするものは通常このボリュームをマウントする。

マウントとはファイルシステム外のものを見に行くこと？

プロセスとはエントリーポイント毎に一つと考える？割とこれでOKな感じっぽい
スレッドはプロセスの中でプログラムを並列処理する時に使う実行単位（並列処理で同じプログラムを重複させない）

Dockerはプロセス単位にdockerを使う。

大きなプログラムの場合はdockerが複数作られる。

これらを一つずつ起動するのは大変なので、docker-composeを使う。

コマンドはdockerと近く、volumeやnetworkも一限管理できる

リポジトリ：保管場所をかっこよく言っただけもの、何を保管するかは文脈から考える

Context: プログラム上の要素が、位置や内部状態によって異なる振る舞いをしたり、異なる制約を受けたりする
文脈というより、文脈を読んで欲しいものにつける

```
function shopping(context){
    addCart(context);
    pos(context);
    payment(context);
    intoBag(context);
}

```

```
g.setColor(Color.RED); // 赤をセットする
g.drawLine(x1, y1, x2, y2); // 赤い線が描かれる

```

プログラムは上から下に流れるので、drawLine は setColor の後に実行され、setColor の影響を受ける。言い換えるなら setColor によって変化した文脈に依存しているというわけだ


State: 変数の中身によって異なる処理を行う場合はstate

```
function today(state){
    if(state == "仕事"){
        console.log("帰りたい");
    }
    else if(state == "休日"){
        console.log("やったぜ");
    }
}

```

Context ≠ state


Docker compose : dockerのヘルパー。`同じホスト`でdockerを複数起動するために使う

kubernetes: `マルチホスト`でコンテナを実行して接続するため.類似はdocker swarm


https://qiita.com/yito/items/1edd82414dfc2ab2a7bc
これでリモート開発環境でコードやnodemoduleとかどうなているのかわかると思う。




Docker-composeはcomposeファイルを使う


名前解決＝サービス・ディスカバリ


Docker swarm

オーケストレーション: 複数のホスト・システム上を横断してスケールできる機能（コンテナ）に依存しない
- スケジューリング：設定ファイルをベースにサービスを定義・維持 <- これ
- クラスタ管理：計算資源の抽象化、

クラスタ: 同じようなものが集まっている　<ー> ノード
- 同じようなのが、わちゃわちゃ集まっていること
- 記憶装置の記録単位で「セクタ」がいくつか集まったもの。
- 複数のコンピュータが集まって1つのコンピュータっぽく振る舞っているシステムのこと
セクタ：
https://wa3.i-3-i.info/word12487.html


従来のクラスタは構成するノードに対して、一方的なリソース要求が一般的。
宣言型サービス・モデルのオーケストレーション：状態をみて期待状態まで自動的に維持する

複数のホスト間で共通ネットワーク（ingress）を自動生成
どのノードにアクセスがあっても、コンテナが動作してるノードに自動ルーティング



dockerfileを描くときのベストプラクティス
 
エファラメルであるべき
- 停止および破棄可能
- 最小限のセットアップと設定ファイルで利用できる
- 再構築や置き換えが可能

ビルド・コンテクストの理解
```
docker image build -t  <IMAGE:TAG> .
```
- デフォルトは、コマンド実行ディレクトリ（`,`）
- `-f`オプションでDockerfileの別名を指定可能（例： `-f Dockerfile.dev`）
構築時、ビルド・コンテクストとして、現在のディレクトリ以下にある `全てのファイルやディレクトリ`をDockerデーモンに送信
Dockerfileは必ず入る
COPYやADD命令等、Dockerfileの内容に関係なく、すべてのディレクトリ内容を送信する
`buildに時間がかかる原因`, `buildでメモリを消費する原因`


