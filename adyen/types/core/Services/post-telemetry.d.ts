/**
 * Log event to Adyen
 * @param config -
 */
declare const logTelemetry: (config: any) => (event: any) => Promise<any>;
export default logTelemetry;
