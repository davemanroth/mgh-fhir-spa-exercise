FROM node:16.3.0-alpine
LABEL description="This is the docker image for the front-end dev exercise"
WORKDIR /mgh-fhir-spa-exercise
ENV PATH /mgh-fhir-spa-exercise/node_modules/.bin:$PATH
COPY package.json yarn.lock ./
RUN yarn && yarn cache clean
COPY . .
EXPOSE 8080
