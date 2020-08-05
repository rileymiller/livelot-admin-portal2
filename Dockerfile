# pull official base image
FROM node:13.12.0-alpine
RUN apk add --no-cache bash

EXPOSE 6931
# set working directory
WORKDIR /livelot-admin-portal

# add `/app/node_modules/.bin` to $PATH
ENV PATH /livelot-admin-portal/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn

# add app
COPY . ./

# start app
CMD ["yarn", "dev"]
