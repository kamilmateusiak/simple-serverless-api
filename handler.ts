import { APIGatewayProxyEvent } from 'aws-lambda';
import { Parser, transforms } from 'json2csv';
import { extractDateComponents } from './utils/extract-date-components';
import { getFollowingDatesComponents } from './utils/get-following-dates-components';
import { getMonthDateForBonusPayment } from './utils/get-month-date-for-bonus-payment';
import { getMonthLastDateForPayment } from './utils/get-month-last-date-for-payment';
import { validateDateFormat } from './utils/validate-date-format';
import { validateTimezone } from './utils/validate-timezone';

export const getPayments = async (event: APIGatewayProxyEvent) => {
  const date = event.queryStringParameters?.date ? decodeURIComponent(event.queryStringParameters.date) : void 0;
  const timezone = event.queryStringParameters?.timezone ? decodeURIComponent(event.queryStringParameters.timezone) : void 0;

  try {
    validateDateFormat(date)

    if (timezone) {
      validateTimezone(timezone)
    }

  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({ errorMessage: e.message })
    }
  }

  const { year, month } = extractDateComponents(date, timezone);

  const dateComponentsToExamine = getFollowingDatesComponents(month, year);

  const jsonResult = dateComponentsToExamine.map(components => {
    return {
      paymentDates: getMonthLastDateForPayment(components.month, components.year, timezone),
      bonusPaymentDates: getMonthDateForBonusPayment(components.month, components.year, timezone)
    }
  })

  try {
    const { unwind } = transforms;
    const fields = ['paymentDates', 'bonusPaymentDates'];
    // @ts-ignore
    const transformss = [unwind({ paths: ['paymentDates', 'bonusPaymentDates'], blankOut: true })];

    const json2csvParser = new Parser({ fields, transforms: transformss});
    const csv = json2csvParser.parse(jsonResult);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-disposition': 'attachment; filename=paymentDates.csv'
      },
      body: csv
  };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({
          errorMessage: e.message
      })
    }
  }
}
