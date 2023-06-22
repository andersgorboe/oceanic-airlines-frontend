FROM node:lts-alpine as build-stage

WORKDIR /app
COPY . .
RUN apk add --update python3
RUN apk add python  make g++
RUN npm install
RUN npm run build


FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
