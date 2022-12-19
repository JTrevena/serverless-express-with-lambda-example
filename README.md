# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template


## Actually Useful Commands

Run `cdk synth` to generate the template file (similar to a SAM template, but in JSON)

Then run `sam local invoke MyFunction --no-event -t ./cdk.out/TestCdkLambdaStack.template.json` to invoke the function locally and test it 

Then run `cdk deploy` to deploy the function to AWS 

To live reload locally, look at [this](https://stackoverflow.com/questions/71757720/watching-typescript-cdk-builds)