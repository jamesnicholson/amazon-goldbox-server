FROM node:current-slim
#MAINTAINER James nicholson <jam3s.nicholson@gmail.com>
WORKDIR /apps/goldbox-frontend
COPY package.json /apps/goldbox-frontend
RUN yarn install
COPY . /apps/goldbox-frontend
CMD ["yarn", "start"]