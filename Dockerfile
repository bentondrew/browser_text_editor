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
RUN m -rf /etc/nginx/conf.d/default.conf
# RUN addgroup -S -g 1000 nginx_user && \
#     adduser -u 1000 -S -G nginx_user -h /home/nginx_user -s /sbin/nologin -D nginx_user && \
#     chown -R nginx_user:nginx_user /home/nginx_user && \
#     rm -rf /etc/nginx/conf.d/default.conf && \
#     touch /var/run/nginx.pid && \
#     chown -R nginx_user:nginx_user /var/run/nginx.pid && \
#     chown -R nginx_user:nginx_user /var/cache/nginx && \
#     apk add --no-cache libcap && \
#     setcap CAP_NET_BIND_SERVICE=+eip /usr/sbin/nginx
# WORKDIR /home/nginx_user
COPY service/ /etc/nginx/conf.d/
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY static/ /usr/share/nginx/static/
EXPOSE 80
USER nginx
CMD ["nginx", "-g", "daemon off;"]
