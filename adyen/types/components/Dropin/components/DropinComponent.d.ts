import { Component } from 'preact';
import { DropinComponentProps, DropinComponentState } from '../types';
import './DropinComponent.scss';
export declare class DropinComponent extends Component<DropinComponentProps, DropinComponentState> {
    state: DropinComponentState;
    componentDidMount(): void;
    prepareDropinData: () => void;
    private setStatus;
    private setActivePaymentMethod;
    componentDidUpdate(prevProps: any, prevState: any): void;
    private handleOnSelectPaymentMethod;
    private handleDisableStoredPaymentMethod;
    closeActivePaymentMethod(): void;
    render(props: any, { elements, status, activePaymentMethod, cachedPaymentMethods }: {
        elements: any;
        status: any;
        activePaymentMethod: any;
        cachedPaymentMethods: any;
    }): any;
}
export default DropinComponent;
