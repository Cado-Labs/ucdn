FROM node:alpine

RUN yarn global add @Cado-Labs/ucdn

ENTRYPOINT ["/usr/local/bin/ucdn"]
