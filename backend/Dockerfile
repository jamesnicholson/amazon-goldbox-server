# Use an official Node.js runtime as a base image
FROM node:14

WORKDIR /apps/goldbox-server
COPY package.json /apps/goldbox-server
RUN npm install
RUN npm install -g typescript
COPY . /apps/goldbox-server

# Copy custom virtual host file
COPY ./src/config/deals-virtualhost.conf  /etc/apache2/sites-available/

# Enable the virtual host (this depends on your specific Apache setup)
RUN echo "Include  /etc/apache2/sites-available/deals-virtualhost.conf" \
    >>  /etc/apache2/apache2.conf
CMD ["npm", "start"]
