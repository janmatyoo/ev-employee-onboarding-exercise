FROM node:15-alpine
WORKDIR /backend

COPY package.json .
RUN npm install
COPY . .
EXPOSE 80
CMD ["npm", "start"]