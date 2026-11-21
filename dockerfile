FROM nginx:stable-alpine3.24
COPY ./dist/ /usr/share/nginx/html
