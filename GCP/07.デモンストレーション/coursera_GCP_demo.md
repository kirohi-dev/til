# デモンストレーション:Compute Engineの使用

Compute engine内の仮装マシン同士で複数のプロトコルで通信することができる。
- pingで通信を行ってみる
- pingとは、ねーとワーク疎通を確認したいホストに対してIPパケットを発行し、正しく届いているか確認するコマンド。
- 普通にインスタンス名でpingを行おうと思うとDNSエラーが起こる
- GCPには内部DNSという機能が存在し、インスタンス名とIPの紐付けを行っている
- 内部DNSで名前解決できないそうで、エラーが起こるので、内部IP直書きで解決する。

**これら 2 つのインスタンスの内部 IP アドレスの最初の 3 バイトは同じです。異なるゾーンにあっても、Google Cloud VPC の同じサブネットに属しています**

**ping コマンドの出力から、my-vm-1 の完全なホスト名が my-vm-1.c.PROJECT_ID.internal であることがわかります。PROJECT_ID は Google Cloud Platform プロジェクトの名前です。GCP は、VM インスタンスの内部 IP アドレスのドメイン ネーム サービス（DNS）解決を自動的に提供します。**

**The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.
Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Creating directory '/home/student-00-b7d2512f7134'.**

## 学んだこと
- GCEを使ってwebサーバーを立てる
- インスタンス1にnginxを入れる
- そのインスタンス1にはインスタンス2からssh通信でログインする
- インスタンス1はhttp通信を許可することで外部IPを解放する
- インスタンスのHTTPトラフィックを許可をするは必須

**sこのラボでは、2 つの異なるゾーンで仮想マシン（VM）インスタンスを作成し、ping、ssh、HTTP を使用してそれらに接続しました。**

**my-vm-1 VM インスタンスを作成したときに [HTTP トラフィックを許可する] をクリックするのを忘れた場合は、ウェブサーバーのホームページにアクセスしようとしてもできません。ファイアウォールのルールを追加してインスタンスへのインバウンド トラフィックを許可することができますが、その説明はこのコースの対象外です。**

## VPCとは
google cloud vpcで使う。
DNSを解決するためのものだと思っていた。

**VPC ネットワークは、単にネットワークと呼ばれることもありますが、データセンターのような物理ネットワークを仮想化したネットワークです。**

- vpcネットワークはグローバルなリソース
- サブネットはリージョンリソース
