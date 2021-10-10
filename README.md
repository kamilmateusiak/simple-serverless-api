# Serverless Framework Node with Typescript HTTP API on AWS

This project is a simple HTTP API with Node.js and Typescript running on AWS Lambda and API Gateway using the Serverless Framework v1.

## Setup

Run this command to initialize a new project in a new working directory.

```
npm install
```

## Usage

**Deploy**

```
$ serverless deploy
```

**Invoke the function locally.**

```
serverless invoke local --function hello
```

**Invoke the function**

```
curl https://xxxxxxxxx.execute-api.us-east-1.amazonaws.com/
```
