FROM nginx:stable-alpine3.24
COPY ./dist/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80