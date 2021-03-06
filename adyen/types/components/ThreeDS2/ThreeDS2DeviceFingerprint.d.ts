import { h } from 'preact';
import UIElement from '../UIElement';
import { ErrorObject } from './components/utils';
export interface ThreeDS2DeviceFingerprintProps {
    dataKey: string;
    token: string;
    notificationURL: string;
    onError: (error?: string | ErrorObject) => void;
    paymentData: string;
    showSpinner: boolean;
    type: string;
    useOriginalFlow?: boolean;
    loadingContext?: string;
    clientKey?: string;
    elementRef?: UIElement;
}
declare class ThreeDS2DeviceFingerprint extends UIElement<ThreeDS2DeviceFingerprintProps> {
    static type: string;
    static defaultProps: {
        dataKey: string;
        type: string;
    };
    private callSubmit3DS2Fingerprint;
    render(): h.JSX.Element;
}
export default ThreeDS2DeviceFingerprint;
