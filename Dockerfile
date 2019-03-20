# Based on Dockerfile from https://vuejs.org/v2/cookbook/dockerize-vuejs-app.html

# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY src/ ./
RUN npm install npm -g && \
    npm install -g typescript && \
    npm install -g ts-node && \
    npm install -g @vue/cli && \
    npm install -g @vue/cli-service-global
RUN vue build App.vue

# production stage
FROM nginx:stable-alpine as production-stage
RUN addgroup -S -g 1000 python_user && \
    adduser -u 1000 -S -G python_user -h /home/python_user -s /sbin/nologin -D python_user && \
    chown -R python_user:python_user /home/python_user && \
    rm -rf /etc/nginx/conf.d/default.conf && \
    touch /var/run/nginx.pid && \
    chown -R python_user:python_user /var/run/nginx.pid && \
    chown -R python_user:python_user /var/cache/nginx && \
    apk add --no-cache libcap && \
    setcap CAP_NET_BIND_SERVICE=+eip /usr/sbin/nginx
WORKDIR /home/python_user
COPY service/ /etc/nginx/conf.d/
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY static/ /usr/share/nginx/static/
EXPOSE 80
USER python_user
CMD ["nginx", "-g", "daemon off;"]
