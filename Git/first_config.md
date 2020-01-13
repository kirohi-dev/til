# 初期設定

## ssh設定

```
mkdir -p ~/.ssh
cd ~/.ssh
ssh-keygen -t rsa // 鍵を作成 パラフレーズ設定無視してenter
pbcopy < ~/.ssh/id_rsa.pub // 公開キーをクリップボードにコピー
```

公開キーをgithubにアップする。

```
ssh -T github // githubと接続を確かめる
```

## 初期設定

```
git config --global user.name "xxxx"
git config --global user.email "xxxx"
```
