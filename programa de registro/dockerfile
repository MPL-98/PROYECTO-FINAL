FROM node:16

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install 

COPY . .

EXPOSE 6000

CMD [ "npm", "run", "start" ]