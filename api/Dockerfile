FROM node:12 AS builder

WORKDIR /app
COPY ./packages/webpack-node-externals ./packages/webpack-node-externals
COPY src/auth ./auth/
COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn &&\
    cd ./auth &&\
    yarn run build

FROM mhart/alpine-node:12
WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/auth/build/ ./auth/build
COPY --from=builder /app/auth/package.json ./auth/package.json
RUN yarn --prod

WORKDIR /app/auth
CMD yarn run start
