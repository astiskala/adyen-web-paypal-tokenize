import { Component, h } from 'preact';
import { DoFingerprint3DS2Props, DoFingerprint3DS2State } from './types';
/**
 * Create and Base64URL encode a JSON object containing the serverTransactionID & threeDSMethodNotificationURL.
 * This Base64URL string will be added to the <form> in the ThreeDS2Form component.
 * The ThreeDS2Form component will submit the <form> when it mounts, using the ThreeDS2Iframe as the <form> target.
 * getProcessMessageHandler will listen for the postMessage response from the notificationURL and will settle the
 * promise accordingly causing this component to call the appropriate callback.
 * The callbacks exist in the parent component: ThreeDS2DeviceFingerprint where they ultimately call the onComplete
 * function passed as a prop when checkout.create('threeDS2DeviceFingerprint') is called.
 */
declare class DoFingerprint3DS2 extends Component<DoFingerprint3DS2Props, DoFingerprint3DS2State> {
    private processMessageHandler;
    private fingerPrintPromise;
    static defaultProps: {
        showSpinner: boolean;
    };
    constructor(props: any);
    get3DS2MethodPromise(): Promise<unknown>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render({ threeDSMethodURL }: {
        threeDSMethodURL: any;
    }, { base64URLencodedData }: {
        base64URLencodedData: any;
    }): h.JSX.Element;
}
export default DoFingerprint3DS2;
