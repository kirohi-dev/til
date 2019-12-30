# 課金体系について

- 秒単位の課金体系
    - compute engineなど
    - 仮想マシンの数が大きくなると効果を発揮する
- 継続利用割引
    - compute engineなど
    - 月の25%以上インスタンスを実行すると割引

# open api

- GCPはオープンソースサービスと互換あり
    - 例
        - BigQueryはapache HBaseなので移管が簡単
- TensorFlowは全てオープンソース

# IAM

 Identity and Access Managementです これは IMまたは IAMとも呼ばれ ユーザーごとに行える操作を制御します.

- ユーザーごとに行える操作を制御
- 接続するインターフェースを制御
- プロジェクトを使って関連リソースを整理する
- **最小権限**の実装をできる

## 最小権限の原則

- ユーザーには業務に必要な権限のみをあたえる
- これによりユーザーをあらゆるエラーから保護できる

# GCPの管理レイヤと通信する方法
- cloud platform console
- SDK
- mobile App
- rest api

# GCPのリソース階層

下のレイヤから見ていくと良い。

- 組織node
    - folders
        - project
            - resource