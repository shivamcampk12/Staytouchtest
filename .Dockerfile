FROM node:18.12.1

RUN mkdir -p /Users/hacksmith/Desktop/StayTouchTest/node_modules && chown -R node:node /Users/hacksmith/Desktop/StayTouchTest

WORKDIR /Users/hacksmith/Desktop/StayTouchTest

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "npm run start" ]
