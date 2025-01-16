FROM node:lts-alpine3.17

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

COPY --chown=node:node . .

ENV SERVER_PORT=5000
ENV SERVER_HOST=0.0.0.0

RUN npm ci && npm install

EXPOSE 5000

CMD [ "npm", "start" ]