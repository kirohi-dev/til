# es6を使う方法

babelをnodemonのインストール
```
npm init
npm install @babel/core @babel/node @babel/preset-env nodemon
```

.babelrcの作成

```
touch .babelrc
```

.babelrcの内容

```
{
    "presets": [
        "@babel/preset-env"
    ]
}
```

package.jsonのscriptの内容

```
"start": "nodemon --exec babel-node ./main.js"
```
