const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');
const { AwsLambdaInstrumentation } = require('@opentelemetry/instrumentation-aws-lambda');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');
const provider = new NodeTracerProvider();
provider.register();
registerInstrumentations({
 instrumentations: [
   new AwsLambdaInstrumentation({
     disableAwsContextPropagation: true
   })
 ],
});