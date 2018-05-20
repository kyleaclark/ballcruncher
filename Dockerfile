FROM gcr.io/google_appengine/nodejs

RUN /usr/local/bin/install_node '=6.2.2'

COPY package.json /app/package.json
RUN npm install

COPY public /app/public
COPY src /app/src
COPY tools /app/tools
RUN npm run build

WORKDIR /app/build

CMD npm start
