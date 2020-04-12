# CMD

```
デーモンの実行
```

RUN命令はイメージを作成するために実行するコマンドを記述するが、イメージをもとに生成したコンテナ内でコマンドを実行するにはCMDを使う。

Dockerfileには1つのCMD命令を記述することができる。
もし複数指定したときは、最後のコマンドのみが有効になる。

例えば、webサーバーを稼働させるために、NginxをインストールするコマンドはRUN命令で、インストールしたNginxをデーモンとしてコンテナ内で常時動作させるためにはCMD命令を使う。

## 記述方法

### Exec形式での記述

```
CMD ["nginx", "-g", "daemon off;"]
```

### Shell形式での記述

フォアグランドで実行する場合にシェルを介して実行したい時に使う

```
CMD nginx -g 'daemon off;'
```

### Entory pointの引数として記述
