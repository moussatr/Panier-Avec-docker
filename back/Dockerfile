FROM node:lts

WORKDIR /back
COPY package.json .
RUN npm install
COPY . .
# ENV npm_config_user=root

# Assurez-vous que le fichier nodemon a les bonnes permissions
RUN chmod +x back/node_module/.bin/nodemon

EXPOSE $NODE_DOCKER_PORT

CMD ["npm", "run", "dev"]
