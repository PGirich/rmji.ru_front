# build stage
FROM node:lts-alpine as build
WORKDIR /app
RUN npm install -g @angular/cli@18
COPY package*.json ./
RUN npm ci
COPY . .
RUN ng build

# production stage
FROM nginx:alpine-slim as production
COPY --from=build /app/dist/rmji.ru/browser /etc/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/nginx.conf
RUN rm /etc/nginx/conf.d/default.conf
EXPOSE 80
EXPOSE 443
#CMD ["nginx", "-g", "daemon off;"]


