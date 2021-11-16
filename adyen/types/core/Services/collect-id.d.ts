/**
 * Log event to Adyen
 * @param config - ready to be serialized and included in the body of request
 * @returns a function returning a promise containing the response of the call
 */
declare const collectId: ({ loadingContext, clientKey, experiments }: {
    loadingContext: any;
    clientKey: any;
    experiments: any;
}) => () => any;
export default collectId;
