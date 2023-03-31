FROM node:alpine
COPY . /app
# move into the /app directory
WORKDIR /app

EXPOSE 3000

RUN npm install
RUN npm run build

CMD npm run start 