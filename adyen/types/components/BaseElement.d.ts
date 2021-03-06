import EventEmitter from './EventEmitter';
import Analytics from '../core/Analytics';
import RiskElement from '../core/RiskModule';
import { Order } from '../types';
import Core from '../core';
export interface BaseElementProps {
    _parentInstance?: Core;
    order?: Order;
    modules?: {
        analytics: Analytics;
        risk: RiskElement;
    };
    isDropin?: boolean;
}
declare class BaseElement<P extends BaseElementProps> {
    readonly _id: string;
    props: P;
    state: any;
    protected static defaultProps: {};
    _node: any;
    _component: any;
    eventEmitter: EventEmitter;
    private readonly _parentInstance;
    protected constructor(props: P);
    /**
     * Executed during creation of any payment element.
     * Gives a chance to any paymentMethod to format the props we're receiving.
     */
    protected formatProps(props: P): P;
    /**
     * Executed on the `data` getter.
     * Returns the component data necessary for the /payments request
     */
    protected formatData(): {};
    protected setState(newState: object): void;
    /**
     * Returns the component payment data ready to submit to the Checkout API
     * Note: this does not ensure validity, check isValid first
     */
    get data(): any;
    protected render(): void;
    /**
     * Mounts an element into the dom
     * @param domNode - Node (or selector) where we will mount the payment element
     * @returns this - the payment element instance we mounted
     */
    mount(domNode: HTMLElement | string): this;
    /**
     * Updates props, resets the internal state and remounts the element.
     * @param props - props to update
     * @returns this - the element instance
     */
    update(props: P): this;
    /**
     * Unmounts an element and mounts it again on the same node
     */
    remount(component?: any): this;
    /**
     * Unmounts a payment element from the DOM
     */
    unmount(): this;
    /**
     * Unmounts an element and removes it from the parent instance
     */
    remove(): void;
}
export default BaseElement;
