FROM node:alpine

RUN yarn global add @cadolabs/ucdn

ENTRYPOINT ["/usr/local/bin/ucdn"]
