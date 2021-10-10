import { Handler } from 'aws-lambda';
import mockData from './__mocks__/response.json'

export const payments: Handler = event => {
    const { date } = event.queryStringParameters;

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            paymentDates: mockData,
        }),
    };

  return new Promise((resolve) => {
    resolve(response)
  })
}
