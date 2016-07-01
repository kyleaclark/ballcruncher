FROM node:6.2.2

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

RUN npm run build
COPY . /usr/src/app/build

EXPOSE 5000

CMD [ "npm", "start" ]
