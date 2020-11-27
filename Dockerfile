FROM node:alpine
WORKDIR /app
COPY ./ ./
RUN npm install && npm run build
