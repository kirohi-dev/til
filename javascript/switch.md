# switch文

```
switch (条件) {
    case 値:
        式
        break;
    case 値:
        式
        break;
    default:
        式
}
```

- defaultの後にbreakはいらない
- caseブロックでbreakを消すこともできる。その場合は、その後のcaseブロックも評価される。
- 式を `return` `throw`で返す場合はbreakはいらない。
