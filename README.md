# Serverless Framework Node with Typescript HTTP API on AWS

This project is a simple HTTP API with Node.js and Typescript running on AWS Lambda and API Gateway using the Serverless Framework v1.

## Setup

Run this command to initialize a new project in a new working directory.

```
npm install
```

## Usage

**Invoke the function locally.**

```
yarn dev
```

**Response**
Two parameters are accepted:
- `date` - date string in the JavaScript default format "MM/DD/YYYY"
- `timezone` - optional timezone, when not provided calculation will happen for UTC timezone 

The function will reaturn csv file with data: `paymentDates`, `bonusPaymentDates`. In case of any error it will response with the following JSON:
```
{
    statusCode: number;
    data: {
        errorMessage: string;
    }
}
```
