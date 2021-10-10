import { Handler } from 'aws-lambda';

export const payments: Handler = event => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Success',
        input: event,
      },
      null,
      2
    ),
  };

  return new Promise((resolve) => {
    resolve(response)
  })
}
