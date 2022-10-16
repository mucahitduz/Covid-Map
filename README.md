# Getting Started with Covid-19 Map App

This documentation will help you install the application in your windows machine.

- Author of this Document : Mücahit Düz

- Developer : Mücahit Düz

## Prerequisites before starting

- Docker should be installed in your machine

## Setup

**1.** Open **Git Bash**\
**2.** Change the current working directory to the location where you want the cloned directory.\
**3.** Type `git clone https://github.com/Sagar-Sharma-7/Covid19-Tracker-Countries.git`\
**4.** Press **Enter** to create the clone of this repository.\
**5.** Install dependencies

```bash
npm install
```

**6.** Create a Dockerfile in the root directory that contains:

```bash
FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
```

**7.** Run the command below

```bash
docker build --tag react .
```

**8.** Run the command below

```bash
docker run --publish 3000:3000 react
```

**9.** Run the command below

```bash
docker-compose build
```

**10.** Run the command below

```bash
docker-compose run app
```

**11**. Run the command below

```bash
docker-compose up
```

**12**. Open your browser and go to `http://localhost:3000`
