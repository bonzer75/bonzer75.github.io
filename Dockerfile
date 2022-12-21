FROM node:16

RUN npm install -g @angular/cli
WORKDIR /home/app
COPY . /home/app
RUN npm i

#docker build -t app .

CMD ["ng", "serve"]
