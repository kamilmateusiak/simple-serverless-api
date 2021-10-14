import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { HttpError } from "./errors"

export const lambdaWrapper =
  <
    T extends Record<string, number | string> | string,
    V extends (event: APIGatewayProxyEvent) => Promise<T>
  >(
    handler: V
  ) => async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  console.debug('Event received', event);

  let response;

  try {
    const result = await handler(event)

    response = {
      statusCode: 200,
      body: result
        ? typeof result === 'string'
          ? result
          : JSON.stringify(result)
        : undefined
    }
  } catch (error) {
    if (error instanceof HttpError) {
      if (error.logLevel) {
          console[error.logLevel](error.message)
      }

      response = error.response
    } else {
      console.error('Unexpected handler error: ', error)

      response = {
        statusCode: 500,
        body: JSON.stringify({ errorMessage: 'Internal Server Error' })
      }
    }
  }
  return response
}
