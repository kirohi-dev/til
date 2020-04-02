# テストダブル


## この記事の重要なところ
https://qiita.com/kaleidot725/items/075934e8e6be902a7fe1

### テストダブルとは

テストダブル (Test Double) とは、ソフトウェアテストにおいて、テスト対象が依存
しているコンポーネントを置き換える代用品のこと。ダブルは代役、影武者を意味する。

### 色々な種類

|種類|役割|具体的|
---|---|---|---
|スタブ|テスト対象が依存コンポーネントを呼び出したときに取得できる値を用意する。|依存コンポーネントから取得できる値が変化したとき、テスト対象の挙動がどう変化するか確認するテスト|
|モック|テスト対象が依存コンポーネントを呼び出したときに与えた値が記録する。|テスト対象が依存コンポーネントに入力した内容を検証するテスト|
|スパイ|テスト対象が依存コンポーネントを呼び出したときに取得できる値を用意し、さらに呼び出したときに与えた値を記録する。（スタブとモックの機能を持つ）|テスト対象が既に実装された依存コンポーネントを呼び出した値や回数を検証するテスト|
|フェイク|実際のコンポーネント同様の動作をする。テストを実行するための軽量化されたコンポーネントのこと|データベースを使用するテストの場合、膨大な時間がかかる場合がある。フェイクとして同機能をインメモリデータベースで実装しテストを高速化する。|
|ダミー|テストするメソッドには関係ないが、コンパイルを通すために必要なコンポーネント|テストに関係はないがコンストラクタに与える値が足りない、その値を埋めるために作成する。|

## スタブ

https://qiita.com/k5trismegistus/items/10ce381d29ab62ca0ea6

### スタブ

```
require 'minitest/autorun'

MiniTest.autorun

def hoge(some_object)
  some_object.some_number + 1
end

class TestHoge < MiniTest::Test
  # hogeの挙動をテストしたい
end
```

some_objectに依存している。
some_object.some_number はきっと他のところでテストされているはずですし、その正しさまで検証するのは test_hoge の責務ではありません。なので、今書こうとしているテストコードでは hoge メソッドの正しさだけに注目すべきです。そのために some_object としてテストのために決まりきった「正しい」挙動をするオブジェクトを注入します。すると、テスト内でsome_objectは正しい動きをするとわかっているわけですから、もしテストが失敗したとしたら「他のどこか」ではなく hoge メソッドの実装に問題があるとわかるわけです。

このように、テストを書くときは他のオブジェクトの実装に依存しないテストを作るべきです。このために使うが「スタブ」です。

```
require 'minitest/autorun'

MiniTest.autorun

def hoge(some_object)
  some_object.some_number + 1
end

class TestHoge < MiniTest::Test
  StubbedObject = Struct.new(:some_number)
  def setup
    @stubbed_object = StubbedObject.new(1)
  end

  def test_hoge
    assert_equal 2, hoge(@stubbed_object)
  end
end
```
とりあえず適当な値を返させて確かめる

## モック

https://qiita.com/yuma-ito-bd/items/38c929eb5cccf7ce501e


```
// importするモジュールを変数に割り当てる
import * as walkModule from './walk';

describe('walkFast関数のモック化テスト', () => {
    test('モック化できているか', () => {
        // spyOnすることによって、該当関数の型がspyInplementationに変化します。
        // mockReturnValueOnceによって自由にモック化できます。
        // jest.spyOnだけでは、実際の関数（モック化されていない関数）が実行されるので注意
        const walkSpy = jest.spyOn(walkModule, 'walkFast').mockReturnValueOnce('walk slow');

        expect(walkModule.walkFast()).toBe('walk slow');
        expect(walkSpy).toHaveBeenCalled();
    });
});
```
- importするモジュールの割り当て
- spyOn(モジュール変数, '関数名')と理想的なレスポンスの実装(mockReturnValueOnce())


