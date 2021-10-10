import { APIGatewayProxyEvent } from "aws-lambda";
import { handler } from "../handler";

describe('Unit test for app handler', function () {
    it('verifies successful response', async () => {
        const event: APIGatewayProxyEvent = {
            queryStringParameters: {
                a: "1"
            }
        } as any

        // @ts-ignore
        const result = await handler(event)

        expect(result.statusCode).toEqual(200);
        expect(result.body).toEqual(JSON.stringify({ message: "Success", input: event}, null, 2));
    });
});