# Based on Dockerfile from https://vuejs.org/v2/cookbook/dockerize-vuejs-app.html

# Install Vue cli
FROM node:lts-alpine as vue-cli-install
WORKDIR /app
RUN npm install npm -g && \
    npm install -g typescript && \
    npm install -g ts-node && \
    npm install -g @vue/cli && \
    npm install -g @vue/cli-service-global

# Create default Vue app
FROM vue-cli-install as vue-app-create
COPY config/vuerc /root/.vuerc
RUN vue create -p preset.json text_editor
WORKDIR /app/text_editor

# Remove default file
FROM vue-app-create as custom-app-setup
RUN rm -rf src/main.js src/router.js src/store.js src/App.vue src/assets/logo.png src/components/HelloWorld.vue src/views/About.vue src/views/Home.vue

# Install custom app
FROM custom-app-setup as custom-app-install
RUN npm install vue-flash-message
COPY src/ src/
COPY public/ public/

# build app
FROM custom-app-install as build
RUN npm run build --modern

# production install
FROM nginx:stable-alpine as production
RUN rm -rf /etc/nginx/conf.d/default.conf && \
    touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx/ && \
    apk add --no-cache libcap && \
    setcap CAP_NET_BIND_SERVICE=+eip /usr/sbin/nginx
COPY service/text_editor.conf /etc/nginx/conf.d/
COPY service/nginx.conf /etc/nginx/
COPY --from=build /app/text_editor/dist /usr/share/nginx/html
EXPOSE 80
USER nginx
CMD ["nginx", "-g", "daemon off;"]
