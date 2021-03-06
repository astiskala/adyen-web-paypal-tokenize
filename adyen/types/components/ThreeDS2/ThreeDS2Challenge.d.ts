import { h } from 'preact';
import UIElement from '../UIElement';
import { ErrorObject } from './components/utils';
export interface ThreeDS2ChallengeProps {
    token?: string;
    dataKey?: string;
    notificationURL?: string;
    onError?: (error: string | ErrorObject) => void;
    paymentData?: string;
    size?: string;
    challengeWindowSize?: '01' | '02' | '03' | '04' | '05';
    type?: string;
    useOriginalFlow?: boolean;
}
declare class ThreeDS2Challenge extends UIElement<ThreeDS2ChallengeProps> {
    static type: string;
    static defaultProps: {
        dataKey: string;
        size: string;
        type: string;
    };
    render(): h.JSX.Element;
}
export default ThreeDS2Challenge;
