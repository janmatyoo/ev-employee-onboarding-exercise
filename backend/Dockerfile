FROM node:15-slim
WORKDIR /backend

COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]