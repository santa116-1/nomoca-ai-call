# trial-tois

## 必要条件

- [Docker](https://www.docker.com/) がインストールされていること
- [Docker Compose](https://docs.docker.com/compose/) (もしComposeを使用する場合)

## プロジェクトのセットアップ

### 1. リポジトリをクローンする

まず、GitHubリポジトリをローカル環境にクローンします。

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo

```

### 2. Dockerイメージをビルドする
プロジェクトのルートディレクトリに移動し、Dockerイメージをビルドします

```bash
docker build -t your-image-name .

```
### 3. Dockerコンテナを起動する
ビルドしたDockerイメージを使用してコンテナを起動します。
```bash
docker run -p 3000:3000 your-image-name

```
## Docker Composeを使用してプロジェクトを起動する (オプション)

もし docker-compose.yml ファイルがプロジェクトに含まれている場合、Docker Composeを使用してコンテナを起動できます。

### 1. docker-compose.yml を確認する
docker-compose.yml ファイルが正しいことを確認します。以下は例です：
```bash
    version: '3'
    services:
    app:
        build: .
        ports:
        - "3000:3000"

```

### 2. Docker Composeを使用してコンテナを起動する
以下のコマンドを実行して、Docker Composeを使用してコンテナを起動します。

```bash
docker-compose up --build
```
このコマンドにより、アプリケーションはローカルマシンのポート3000で利用可能になります。

## その他のDockerコマンド
### コンテナの停止
以下のコマンドでコンテナを停止できます。

```bash
docker-compose down
```
または、Dockerランコマンドを使用してコンテナを起動した場合は、以下のコマンドを使用します。

```bash
docker stop <container-id>
```

### コンテナの一覧表示
実行中のコンテナを表示するには、以下のコマンドを使用します。

```bash
docker ps
```
## 環境変数
環境変数が必要な場合は、プロジェクトルートに .env ファイルを作成し、必要な変数を定義します。

例：
```bash

    DATABASE_URL=postgres://user:password@localhost:5432/mydatabase
    SECRET_KEY=mysecretkey
    
```