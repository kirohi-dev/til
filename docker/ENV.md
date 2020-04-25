# ENV
Dockerfile内で環境変数を設定したい時に使う

```
ENV [key] [value]
ENV [key]=[value]
```

## 一度に複数の環境変数を設定する場合は

key=value形式で指定する

```
ENV myName="IKEDA" \
    myOrder= Gin \ Whisky \ Calvados \
    myNickName=ike
```
