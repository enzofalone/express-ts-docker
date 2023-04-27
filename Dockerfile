# image to be used
FROM node:alpine

# copy all our contents into our working directory
COPY . /app

# move(cd) into the /app directory
WORKDIR /app

# define network port
EXPOSE 3000

# commands in order to run our app
RUN npm install
RUN npm run build

CMD npm run start 