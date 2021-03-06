import { Component, h } from 'preact';
import { PrepareFingerprint3DS2Props, PrepareFingerprint3DS2State } from './types';
import { ResultObject } from '../../types';
declare class PrepareFingerprint3DS2 extends Component<PrepareFingerprint3DS2Props, PrepareFingerprint3DS2State> {
    static type: string;
    constructor(props: any);
    static defaultProps: {
        onComplete: () => void;
        onError: () => void;
        paymentData: string;
        showSpinner: boolean;
    };
    componentDidMount(): void;
    setStatusComplete(resultObj: ResultObject): void;
    render(props: any, { fingerPrintData }: {
        fingerPrintData: any;
    }): h.JSX.Element;
}
export default PrepareFingerprint3DS2;
