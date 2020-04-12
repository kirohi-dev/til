# ENTRYPOINT

Dokerfileからビルドしたimageからcontainerを起動するために
`docker container run`コマンドを実行した時に実行されます。

## 記述方法

### Exec形式

### Shell形式

## ENTRYPOINTとCMDの違い

docker container run を実行した時に違いがでる。

### CMD

docker container runの実行時に引数を指定した場合、CMDは無視される。

### ENTRYPOINT

必ずコンテナで実行される

### ENTRYPOINTとCMDの組み合わせ

- ENTRYPOINT
  - コマンドを指定する
- CMD
  - コマンドのオプションを指定する

例）
```
FROM  ubuntu

ENTRYPOINT ["top"]
CMD ["-d", "10"]
```

docker container run -it sample
docker container run -it sample -d 2 // これでオプションを書き換えることができる


