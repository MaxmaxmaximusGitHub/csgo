FROM node:12 AS builder
WORKDIR /app
COPY ./packages/next ./packages/next
COPY ./packages/styled-jsx ./packages/styled-jsx
COPY ./services/next/ ./services/next/
COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn &&\
    cd ./services/next &&\
    yarn run build

FROM mhart/alpine-node:12
WORKDIR /app

# runtime deps
COPY --from=builder /app/packages/styled-jsx ./packages/styled-jsx
COPY --from=builder /app/packages/next ./packages/next

COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/services/next/build/ ./services/next/build
COPY --from=builder /app/services/next/package.json ./services/next/package.json
COPY --from=builder /app/services/next/next.config.js ./services/next/next.config.js
RUN yarn --prod

WORKDIR /app/services/next
CMD yarn run start
