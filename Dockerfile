FROM registry.matchvs.com/matchvs/matchvs_nodejs:latest
WORKDIR /app
COPY package.json /app
RUN cnpm install
COPY . /app
CMD node main.js
