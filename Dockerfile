FROM node:lts-buster
RUN git clone https://github.com/majidi50/PRINCE-MD/root/majidi50
WORKDIR /root/majidi50
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]
