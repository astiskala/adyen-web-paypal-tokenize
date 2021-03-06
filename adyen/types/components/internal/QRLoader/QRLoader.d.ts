import { Component, h } from 'preact';
import './QRLoader.scss';
import { QRLoaderProps, QRLoaderState } from './types';
declare class QRLoader extends Component<QRLoaderProps, QRLoaderState> {
    private interval;
    constructor(props: any);
    static defaultProps: {
        delay: number;
        countdownTime: number;
        onError: () => void;
        onComplete: () => void;
        throttleTime: number;
        classNameModifiers: any[];
        throttledInterval: number;
        introduction: string;
    };
    statusInterval: () => void;
    componentDidMount(): void;
    redirectToApp: (url: any, fallback?: () => void) => void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    componentWillUnmount(): void;
    onTick(time: any): void;
    onTimeUp(): void;
    onComplete(status: any): any;
    onError(status: any): any;
    checkStatus(): Promise<any>;
    render({ amount, url, brandLogo, countdownTime, i18n, loadingContext, type }: QRLoaderProps, { expired, completed, loading }: {
        expired: any;
        completed: any;
        loading: any;
    }): h.JSX.Element;
}
export default QRLoader;
