#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ApiGatewayLambdaSqsLambdaPlaygroundStack } from '../lib/api-gateway-lambda-sqs-lambda-playground-stack';

const app = new cdk.App();
new ApiGatewayLambdaSqsLambdaPlaygroundStack(app, 'ApiGatewayLambdaSqsLambdaPlaygroundStack', {
});