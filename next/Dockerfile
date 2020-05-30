FROM node:12 AS builder
WORKDIR /app
COPY ./packages/next ./packages/next
COPY ./packages/styled-jsx ./packages/styled-jsx
COPY ./next/ ./next/
COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn &&\
    cd ./next &&\
    yarn run build

FROM mhart/alpine-node:12
WORKDIR /app

# runtime deps
COPY --from=builder /app/packages/styled-jsx ./packages/styled-jsx
COPY --from=builder /app/packages/next ./packages/next

COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/next/build/ ./next/build
COPY --from=builder /app/next/package.json ./next/package.json
COPY --from=builder /app/next/next.config.js ./next/next.config.js
RUN yarn --prod

WORKDIR /app/next
CMD yarn run start
