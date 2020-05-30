FROM node:12 AS builder

WORKDIR /app
COPY ./packages/webpack-node-externals ./packages/webpack-node-externals
COPY ./api/ ./api/
COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn &&\
    cd ./api &&\
    yarn run build

FROM mhart/alpine-node:12
WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/api/build/ ./api/build
COPY --from=builder /app/api/package.json ./api/package.json
RUN yarn --prod

WORKDIR /app/api
CMD yarn run start
