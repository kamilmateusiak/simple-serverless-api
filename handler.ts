import { APIGatewayProxyEvent, Handler } from 'aws-lambda';
import { lambdaWrapper } from './utils/lambda-wrapper';
import { validateDateFormat } from './utils/validate-date-format';

export const getPayments = async (event: APIGatewayProxyEvent) => {
  const { date } = event.queryStringParameters;

  try {
    validateDateFormat(date)
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({ errorMessage: e.message })
    }
  }

  return {
      statusCode: 200,
      body: JSON.stringify({
          paymentDates: ["29/01/2021", "26/02/2021", "31/03/2021", "30/04/2021", "31/05/2021", "30/06/2021", "30/07/2021", "31/08/2021", "30/09/2021", "29/10/2021", "30/11/2021", "31/12/2021"],
      }),
  };
}

export const handler = lambdaWrapper(getPayments)
