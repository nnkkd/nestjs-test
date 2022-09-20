FROM node:14-alpine3.12

WORKDIR /api

COPY package*.json ./

RUN npm ci

RUN npm i @nestjs/cli@7.6.0 -g

CMD ["npm", "run", "start:dev"]