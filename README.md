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

HTTPリクエストを受けてDBに作用するものを目指します。

## 進捗

- 2022/09/20
    - コンテナイメージの選定
- 2022/09/21
    - nest.jsをDockerfileからポート3000で起動できるようになった
- 2022/10/09
    - 復帰。認証機能とnestのCLI機能をチェック
