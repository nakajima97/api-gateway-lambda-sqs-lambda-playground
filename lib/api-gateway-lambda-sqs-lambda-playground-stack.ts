import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class ApiGatewayLambdaSqsLambdaPlaygroundStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const gateway_lambda = new lambda.Function(this, 'handler', {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset('lambda/gateway'),
      handler: 'index.handler'
    });

    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: gateway_lambda
    });
  }
}
