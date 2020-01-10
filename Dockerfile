FROM node:12.3 AS build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install 

COPY ./ /app/

RUN npm run build

FROM debian:latest

EXPOSE 80 

RUN apt update -y

RUN apt install -y nginx

COPY --from=build-stage /app/build/ /usr/share/nginx/html/ 

RUN chgrp -R 0 /usr/share/nginx/html/ && \ 
  chmod -R g=u /usr/share/nginx/html/ 

CMD nginx