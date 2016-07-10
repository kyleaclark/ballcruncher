FROM node:6.2.2
MAINTAINER Kyle Clark

WORKDIR /usr/local/app

COPY package.json /usr/local/app/package.json
RUN npm install

COPY src /usr/local/app/src
COPY tools /usr/local/app/tools
RUN npm run build

WORKDIR /usr/local/app/build

CMD ["npm", "start"]
