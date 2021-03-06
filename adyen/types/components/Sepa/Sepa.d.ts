import { h } from 'preact';
import UIElement from '../UIElement';
import { SepaElementData } from './types';
/**
 * SepaElement
 */
declare class SepaElement extends UIElement {
    static type: string;
    /**
     * Formats props on construction time
     */
    formatProps(props: any): any;
    /**
     * Formats the component data output
     */
    formatData(): SepaElementData;
    /**
     * Returns whether the component state is valid or not
     */
    get isValid(): boolean;
    render(): h.JSX.Element;
}
export default SepaElement;
