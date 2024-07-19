# Hello World Fastify API

A small **Node.js Fastify** API.

<!-- TOC -->
* [Setup](#setup)
* [Available routes](#available-routes)
* [Docker](#docker)
<!-- TOC -->

## Setup

- Create `.env` file with [`.env.example`](.env.example) structure and set `SERVER_PORT` env variable.
- Install dependencies

```shell
npm install
```

- Run server
```shell
npm start
```

## Available routes

| Name                 | Route    | Method | Required properties | Description                               |
|----------------------|----------|--------|---------------------|-------------------------------------------|
| Home                 | `/`      | `GET`  | none                | Return 'Hello World from API !' sentence. |
| Say hello to someone | `/hello` | `POST` | `name: string`      | Return 'Hello name !'.                    |

## Docker

Build image with [`Dockerfile`](Dockerfile) :

```shell
docker build -t hello-world-fastify-api:latest -f Dockerfile .
```

Run container with image :

```shell
docker run -it -p 3000:3000 hello-world-fastify-api:latest
```

You can update environment variables in [`Dockerfile`](Dockerfile):
```Dockerfile
ENV SERVER_PORT=3000
ENV SERVER_HOST="0.0.0.0"
```# Hello-World-fastify-API
