FROM node:lts-buster
RUN git clone https://github.com/majidi50/PRINCE-MD/root/prince_md
WORKDIR /root/prince_md
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]
