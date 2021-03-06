import { h } from 'preact';
import BaseElement, { BaseElementProps } from '../../components/BaseElement';
export interface RiskModuleOptions {
    enabled: boolean;
    onComplete: (data: any) => void;
    onError: (error: any) => void;
    node: string;
}
interface RiskModuleProps extends BaseElementProps {
    risk: RiskModuleOptions;
    loadingContext: string;
}
export default class RiskElement extends BaseElement<RiskModuleProps> {
    static type: string;
    static defaultProps: {
        risk: {
            enabled: boolean;
            onComplete: () => void;
            onError: () => void;
            node: string;
        };
    };
    private nodeRiskContainer;
    constructor(props: any);
    formatProps(props: any): any;
    onComplete: (result: any) => void;
    onError: (error: any) => void;
    get isValid(): any;
    get data(): string | false;
    cleanUp: () => void;
    componentWillUnmount(): void;
    render(): h.JSX.Element;
}
export {};
