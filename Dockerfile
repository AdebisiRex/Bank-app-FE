FROM node:18-alpine

WORKDIR /Bank-app-FE

COPY public/ /Bank-app-FE/public
COPY src/ /Bank-app-FE/src
COPY package.json /Bank-app-FE/

RUN npm install

CMD ["npm", "start"]