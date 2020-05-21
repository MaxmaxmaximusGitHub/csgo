FROM node:12 as builder
WORKDIR /usr/src/app
COPY . .
#ENV NODE_ENV=production
RUN apt-get update && apt-get install -y libglu1
#RUN npm i -g gulp
RUN npm ci && npm run build

FROM node:12-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder /usr/src/app .
RUN npm ci --production
EXPOSE 3000
CMD ["node", "build"]



