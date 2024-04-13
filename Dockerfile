FROM node:lts

WORKDIR /

COPY package*.json ./

COPY yarn.lock ./

RUN yarn

ENV PORT=80

ENV NODE_ENV=production

ENV ASSET_PATH="https://d1icgfgxibs78l.cloudfront.net/"

ENV BASE_DOMAIN="serpa.cloud"

COPY . .

RUN yarn build && yarn build:webpack

EXPOSE 80

CMD [ "npm", "start" ]
