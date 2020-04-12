# ONBUILD

自身をベースイメージにしてビルドした時にコマンドが動く。

例)

```
#  ベースイメージの設定
FROM ubuntu:17.10

# Nginx のインストール
RUN apt-get -y update && apt-get -y upgrade 
RUN apt-get -y install nginx

#  ポート指定
EXPOSE 80

# Web コンテンツの配置
ONBUILD ADD website.tar /var/www/html/

# Nginx の実行
CMD ["nginx", "-g", "daemon off;"]

```

このイメージをもとに実行用イメージを作成した時にwebサイトをaddするようになっている。

アプリケーション作成者は実装部分をコーディングし、すでに作成済みのベースイメージをもとにイメージを作成する。
このイメージの中には実装済みのアプリケーションがデプロイされる

