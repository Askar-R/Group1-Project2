FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "node", "app.js" ]







# FROM httpd:latest

# # # The /app directory should act as the main application directory
# # WORKDIR /backapp

# # Copy the app package and package-lock.json file
# COPY ./index.html/ /usr/local/apache2/htdocs/

# # # Install node packages
# # RUN npm install


# # # Run node app.js
# # CMD ["node", "/app.js"]

# # Expose port
# EXPOSE 80 
