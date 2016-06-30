FROM node:6.2.2

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ONBUILD COPY package.json /usr/src/app/
ONBUILD RUN npm install
ONBUILD RUN npm run build
ONBUILD COPY . /usr/src/app/build

CMD [ "npm", "start" ]
