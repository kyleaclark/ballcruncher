FROM node:6.2.2

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
RUN npm run build
COPY . /usr/src/app/build

EXPOSE 5000

CMD [ "npm", "start" ]
