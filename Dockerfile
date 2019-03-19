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
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY service/ /etc/nginx/conf.d/
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY static/ /usr/share/nginx/static/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
