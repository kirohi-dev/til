# pulugin

アプリケーションのルートや context に注入する
関数や値をアプリケーション全体で利用できるようにしたい場合もあるでしょう。 そのような変数を Vue インスタンス（クライアントサイド）やコンテキスト（サーバーサイド）、さらに Vuex ストアへ注入することが可能です。 それらの関数の前には $ を付けるのが一般的です。


## typescriptでcontextにinjectする方法

```
import { Plugin } from '@nuxt/types';

import { AuthService } from '@/domain/auth/authService';

declare module '@nuxt/types' {
  interface Context {
    $auth: AuthService;
  }
}

const authService = new AuthService();

const auth: Plugin = (context) => {
  context.$auth = authService;
};

export default auth;
```

参考
https://typescript.nuxtjs.org/cookbook/plugins.html#ii-inject-into-context
