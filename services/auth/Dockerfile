FROM node:12 AS builder

WORKDIR /app
COPY ./packages/webpack-node-externals ./packages/webpack-node-externals
COPY ./services/auth/ ./services/auth/
COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn &&\
    cd ./services/auth &&\
    yarn run build

FROM mhart/alpine-node:12
WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/services/auth/build/ ./services/auth/build
COPY --from=builder /app/services/auth/package.json ./services/auth/package.json
RUN yarn --prod

WORKDIR /app/services/auth
CMD yarn run start
