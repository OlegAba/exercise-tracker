FROM node:17-alpine as build-image
WORKDIR /usr/src/app
COPY package*.json ./
COPY ./client ./client
COPY ./server ./server
RUN npm run clean-install-all
RUN npm run build-all

FROM node:17-alpine
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package*.json ./

RUN mkdir ./server
COPY --from=build-image ./usr/src/app/server/package*.json ./server
COPY --from=build-image ./usr/src/app/server/dist ./server/dist

RUN mkdir ./client
COPY --from=build-image ./usr/src/app/client/build ./client/build

RUN npm run prod-install
EXPOSE 8080
CMD [ "node", "server/dist/Server.js" ]