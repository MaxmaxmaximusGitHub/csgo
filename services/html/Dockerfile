FROM node:12 AS builder
EXPOSE 3000
WORKDIR /app
COPY ./packages/next ./packages/next
COPY ./packages/styled-jsx ./packages/styled-jsx
COPY ./services/html/ ./services/html/
COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn &&\
    cd ./services/html &&\
    yarn run build

FROM mhart/alpine-node:12
WORKDIR /app

# runtime deps
COPY --from=builder /app/packages/styled-jsx ./packages/styled-jsx
COPY --from=builder /app/packages/next ./packages/next

COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/services/html/build/ ./services/html/build
COPY --from=builder /app/services/html/package.json ./services/html/package.json
COPY --from=builder /app/services/html/next.config.js ./services/html/next.config.js
RUN yarn --prod

WORKDIR /app/services/html
CMD yarn run start
