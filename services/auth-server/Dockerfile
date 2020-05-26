FROM node:12 AS builder
EXPOSE 4000
WORKDIR /app
COPY ./packages/webpack-node-externals ./packages/webpack-node-externals
COPY ./services/auth-server/ ./services/auth-server/
COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn &&\
    cd ./services/auth-server &&\
    yarn run build

FROM mhart/alpine-node:12
WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/services/auth-server/build/ ./services/auth-server/build
COPY --from=builder /app/services/auth-server/package.json ./services/auth-server/package.json
RUN yarn --prod

WORKDIR /app/services/auth-server
CMD yarn run start
