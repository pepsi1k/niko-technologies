FROM node

# create app directory
WORKDIR /usr/src/app

# copy package.json & package-lock.json
# COPY package*.json ./
COPY . .

# install dependendencies
RUN npm install

EXPOSE 4000

CMD ["node", "./app.js"]

