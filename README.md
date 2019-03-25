# browser_text_editor
Service for a browser based text editor. Contains the service which serves up the browser client and the client source code.

## Resources
### Vue Docker Image Creation
* [Install vue client in docker image](https://vuejs.org/v2/cookbook/dockerize-vuejs-app.html)

### Creating Vue app
* [Vue CLI](https://cli.vuejs.org/guide/#components-of-the-system)
* [Vue Guide](https://vuejs.org/v2/guide/#)
* [Vue CLI Video Tutorials](https://www.vuemastery.com/courses/real-world-vue-js/vue-cli/)

## Docker Image Build Instructions
From directory containing the Dockerfile
```Bash
docker build -t browser_text_editor:0.2.0 .
```

## Docker Run Instructions
```Bash
docker run --rm -p 80:80 browser_text_editor:0.2.0
```

## Know Issues
Running production nginx server as non-root user causes unlink from nginx.pid to fail when shutting down server.
