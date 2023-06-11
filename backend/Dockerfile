# Use an official Node.js runtime as a base image
FROM node:14

WORKDIR /apps/goldbox-server
COPY package.json /apps/goldbox-server
RUN npm install
RUN npm install -g typescript
COPY . /apps/goldbox-server
CMD ["npm", "start"]