FROM node:26-alpine

RUN npm install -g @cadolabs/ucdn

ENTRYPOINT ["/usr/local/bin/ucdn"]
