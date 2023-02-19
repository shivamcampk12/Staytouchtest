FROM node:18.12.1

#RUN mkdir -p /Users/hacksmith/Desktop/StayTouchTest/node_modules && chown -R node:node /Users/hacksmith/Desktop/StayTouchTest

WORKDIR /User/Source/StayTouchTest

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3030

CMD [ "npm", "start" ]