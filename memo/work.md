[x] next.js
[x] env
[x] ESLint / Prettier
[x] hooks api
[x] styled-components
[x] redux-hooks
[ ] redux-sagas
[ ] path alias
[ ] enzyma
[ ] react-test-renderer
[ ] _error 404
[ ] zeit/now deploy as SPA


anyenv

grpc

bff
backend for frontend
candidateのコード
/confi -> env系
/c8s -> carbanats
/seed -> db系
/src -> apiのソース
/swagger -> open api

/srcの中
builder -> DBからの値を最適な形に作り変えている
Controller -> リクエストとレスポンスを受け取って、model,builderとやりとりしてレスポンスを返している
Difinishion -> interface
Models -> DBを実行する
Routes -> routerを入れている
Services -> それぞれのサービスを入れている


エラーの場合はエラーコードを返すサービスがある
エラーがあったらエラーオブジェクトをスローしている

コントローラーだけでトライ
バリデートだけスロウエラー


/serviceの中
/config.service.ts -> 環境変数の修正
/converter.service.ts -> create pool
/error.handlar.ts -> エラーハンドリング
/router.service ->  ルーターを変換している
/validator.service ->  基本的なバリデートをする

/validator.service///
isEmpty
isNumeric 
isValidLimit lengthか何かのバリデート？
isValidOffSet 0以上かどうか

@param {string} val value to check
@returns {boolean}


db.service.tsとかかっこいいな

    { name: ErrorCodes.ERR_INVALID_INPUT, code: 400 },
    { name: ErrorCodes.ERR_NOT_FOUND, code: 404 },
    { name: ErrorCodes.ERR_UNKNOWN, code: 500 },
    { name: ErrorCodes.ERR_UNKNOWN_ROUTE, code: 404 },



https://qiita.com/zaburo/items/16ac4189d0d1c35e26d1
