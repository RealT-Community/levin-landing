FROM node:16.15.0-alpine as build 

# Install git
RUN apk update && apk add git nasm autoconf automake g++ make libpng-dev libtool

WORKDIR /app

COPY . .

RUN yarn install

# Fix package
RUN yarn add @next/env

RUN yarn build

RUN yarn export

FROM nginx:1.19

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/out /usr/share/nginx/html
