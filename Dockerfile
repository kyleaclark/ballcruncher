FROM node:4.4.7

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY build .
RUN npm install

EXPOSE 5000
CMD [ "npm", "start" ]
