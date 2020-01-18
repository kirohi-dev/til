# callback

関数は値を受け取り、値を返す。

関数に関数を渡すためには、関数を値にして関数を渡す必要がある。

```
function test(func) {
    func();
}

function func() {
    return 'example';
}
```

## フレーズと意味

- 高級関数: 関数（手続き)を引数にとる関数のこと
- コールバック関数: 高級関数に渡す関数
