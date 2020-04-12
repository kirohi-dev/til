# docker RUN

## 記法

### Shell形式での記述

```
RUN apt-get install -y nginx
```

dockerコンテナ内で/bin/sh -cを使ってコマンドを実行した時と同じ動作をする

### Exec形式での記述

Exec形式の場合はシェルを介さず直接実行する。そのため、$HOMEのような環境変数を指定できない。

Exec形式では実行したいコマンドをJSON配列で指定する。

また、別のシェルを利用したいときなどはRUN命令にシェルのパスを指定して、実行したいコマンドを指定する。

```
RUN ["/bin/bash", "-c", "apt-get install -y nginx"]
```


### 複数行記述可能

RUN命令は、Dockerfileに複数行記述することができる

```
# Base Imageの設定
FROM ubuntu:latest

# RUN命令の実行
RUN echo こんにちはShell形式です
RUN ["echo", "こんにちはExec形式です"]
RUN ["/bin/bash", "-c", "echo 'こんにちはExec形式でbashを使ってみました'"]
```

### Shell形式？Exec形式？

/bash/shを介してコマンドを実行したいときはShell形式で、それ以外はExec形式で記述するといい。

### 一行でかけるものは1行で書く方がいい

RUNが走るごとにイメージレイヤが増えていく。
なので、一行でかけるものは一行で書く方がいい。

### 改行

```
RUN yum -y install\
          httpd\
          php\
          php-mbstring\
          php-pear
```
