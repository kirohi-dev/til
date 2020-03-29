# aliasとpaths

tsconfigでpathsを設定する場合、tscでビルドするとこける場合がある。
その場合はwebpackからビルドして、aliasを指定する。

```
    "paths": {
      "@/*": [
        "src/*"
      ],
    },
```

```
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
```
