import { CoreOptions } from '../types';
declare class Analytics {
    private static defaultProps;
    checkoutAttemptId: any;
    props: any;
    private readonly logEvent;
    private readonly logTelemetry;
    private readonly queue;
    readonly collectId: any;
    constructor({ loadingContext, locale, clientKey, analytics }: CoreOptions);
    send(event: any): void;
}
export default Analytics;
