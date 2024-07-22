# trial-tois

## 必要条件

- [Git](https://git-scm.com/) がインストールされていること
- [Docker](https://www.docker.com/) がインストールされていること
- [Docker Compose](https://docs.docker.com/compose/) がインストールされていること (Composeを使用する場合)

## 環境設定

### 1. Gitのインストール

Gitがインストールされていない場合は、以下のリンクからインストールしてください。
[Gitダウンロードページ](https://git-scm.com/downloads)

インストール後、以下のコマンドでインストールを確認できます。

```bash
git --version

```

### 2. Dockerのインストール

Dockerがインストールされていない場合は、以下のリンクからインストールしてください。
[Dockerダウンロードページ](https://www.docker.com/ja-jp/products/docker-desktop/)

インストール後、以下のコマンドでインストールを確認できます

```bash
docker --version
```

### 3. Docker Composeのインストール
Docker Composeがインストールされていない場合は、以下のリンクからインストールしてください。

[Docker Composeインストールガイド](https://docs.docker.jp/v1.12/compose/install.html)


## プロジェクトのセットアップ

### 1. リポジトリをクローンする

まず、GitHubリポジトリをローカル環境にクローンします。

```bash
git clone -b develop https://github.com/unirobot/trial-toi.git
cd trial-toi

```
### 2. 環境変数の設定
プロジェクトルートに .env ファイルを作成し、必要な環境変数を設定します。例：

```bash
DATABASE_URL=postgres://postgres:qweQWE123@localhost:5432/nomoca

```

### 3. Dockerイメージをビルドする
プロジェクトのルートディレクトリに移動し、Dockerイメージをビルドします

```bash
docker build -t your-image-name .

```
### 4. Dockerコンテナを起動する
ビルドしたDockerイメージを使用してコンテナを起動します。
```bash
docker run -p 3000:3000 your-image-name

```
## Docker Composeを使用してプロジェクトを起動する (オプション)

もし docker-compose.yml ファイルがプロジェクトに含まれている場合、Docker Composeを使用してコンテナを起動できます。

### 1. docker-compose.yml を確認する
docker-compose.yml ファイルが正しいことを確認します。以下は例です：
```bash
version: "3"

services:
  db:
    image: postgres
    environment:
      - "POSTGRES_USER=postgres"
      - "POSTGRES_PASSWORD=qweQWE123"

  web:
    build: .
    command: python manage.py runserver 0.0.0.0:8000
    volumes:
      - .:/code
    ports:
      - "8000:8000"
    depends_on:
      - db
```

### 2. Docker Composeを使用してコンテナを起動する
以下のコマンドを実行して、Docker Composeを使用してコンテナを起動します。

```bash
docker-compose up --build
```
これにより、アプリケーションはローカルマシンのポート3000で利用可能になり、PostgreSQLデータベースも設定されます。ブラウザで http://localhost:3000 にアクセスして、アプリケーションが正しく起動していることを確認してください。
バックエンドは8000ポートで利用可能で、ローカルマシンでhttp://localhost:8000で確認できます。

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
## データベース管理
データベースの設定や管理に関する情報は、以下のとおりです。

### データベースの初期化
初期化スクリプトやマイグレーションファイルがある場合は、それを実行してデータベースをセットアップします。

例：
```bash
    docker-compose exec app python manage.py migrate

```
### データベースのバックアップと復元
データベースのバックアップを取得するには、以下のコマンドを使用します。

```bash
    docker-compose exec db pg_dump -U user nomoca > backup.sql

```
バックアップからデータベースを復元するには、以下のコマンドを使用します。

```bash
    cat backup.sql | docker-compose exec -T db psql -U user nomoca

```
