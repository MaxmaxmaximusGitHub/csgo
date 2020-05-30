FROM node:12 AS builder

WORKDIR /app
COPY ./packages/webpack-node-externals ./packages/webpack-node-externals
COPY ./services/api/ ./services/api/
COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn &&\
    cd ./services/api &&\
    yarn run build

FROM mhart/alpine-node:12
WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/services/api/build/ ./services/api/build
COPY --from=builder /app/services/api/package.json ./services/api/package.json
RUN yarn --prod

WORKDIR /app/services/api
CMD yarn run start
