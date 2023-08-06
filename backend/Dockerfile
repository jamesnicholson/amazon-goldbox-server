# Use an official Node.js runtime as a base image
FROM node:14

WORKDIR /apps/goldbox-server
COPY package.json /apps/goldbox-server
RUN npm install
RUN npm install -g typescript
COPY . /apps/goldbox-server

# Copy custom virtual host file
COPY ./src/config/deals-virtualhost.conf /usr/local/apache2/conf/sites-available/

# Enable the virtual host (this depends on your specific Apache setup)
RUN echo "Include /usr/local/apache2/conf/sites-available/deals-virtualhost.conf" \
    >> /usr/local/apache2/conf/httpd.conf
CMD ["npm", "start"]