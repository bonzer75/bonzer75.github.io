FROM node:16

RUN npm install -g @angular/cli
WORKDIR /home/app
COPY . /home/app

RUN npm i
#docker build -t app .
EXPOSE 4200
#docker create -p4200:4200 --name app
CMD ["ng", "serve"]
