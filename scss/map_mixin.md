# map型 + @mixin

## map型
```
$map: {
  key1: value1,
  key2: value2
}

map-get($map: key1); // value1
```

## @mixin
引数を使うことができる。
@includeで呼び出す。
```
@mixin border($color: 初期値) {
  border-bottom: 1px solid $color;
}
-------------呼び出し--------------
@include border(#999); // border-bottom: 1px solid #999;
```

## メディアクエリ()
```
$breakpoints: {
lg: 1000px,
low: 300px,
}

@mixin media($breakpoint) {
  @media only screen and (min-width: #{map-get($breakpoints, $breakpoint)} {
    @content;
  }
}
-------------呼び出し--------------
@include media(lg) {
  display: block;
}
```
