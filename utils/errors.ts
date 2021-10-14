import type { APIGatewayProxyResult } from 'aws-lambda'

export class HttpError extends Error {
  public response: APIGatewayProxyResult

  public logLevel: 'error' | 'warn' | undefined

  public constructor(
    response: APIGatewayProxyResult,
    constructorOpt: any,
    logLevel?: 'error' | 'warn'
  ) {
    super(response.body)
    this.response = response
    this.logLevel = logLevel
    Error.captureStackTrace(this, constructorOpt)
  }
}
