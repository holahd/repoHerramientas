FROM node: 20.10.0-alpine3.19

WORKDIR /app

COPY package.json .

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]