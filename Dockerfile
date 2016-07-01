FROM node:6.2.2

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ONBUILD COPY package.json /usr/src/app/
ONBUILD RUN npm install

EXPOSE 5000
CMD [ "npm", "start" ]
