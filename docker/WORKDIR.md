# WORKDIR

WORKDIRは次の命令を実行する作業用ディレクトリを指定する

- RUN
- CMD
- ENTRYPOINT
- COPY
- ADD

相対パスは前のWORKDIRに対しての相対パスになる

```
WORKDIR /first
WORKDIR second
WORKDIR third
RUN ["pwd"] // /first/second/third
```
