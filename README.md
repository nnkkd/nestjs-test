# nestjs-test
コンテナ間通信のテスト
nest.js / TypeORM / Mysql


## ディレクトリ構成メモ
```
.
├── db
│   └── Dockerfile
├── docker-compose.yml
├── package.json
├── src
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
.
.
.

```

HTTPリクエストを受けてDBに作用するものを目指す
