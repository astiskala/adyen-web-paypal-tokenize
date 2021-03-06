import { h } from 'preact';
import UIElement, { UIElementProps } from '../UIElement';
import Language from '../../language/Language';
interface IssuerListProps extends UIElementProps {
    showImage?: boolean;
    placeholder?: string;
    issuers?: IssuerItem[];
    i18n: Language;
    loadingContext: string;
}
interface IssuerItem {
    id: string;
    name: string;
}
interface IssuerListData {
    paymentMethod: {
        type: string;
        issuer: string;
    };
}
declare class IssuerListContainer extends UIElement<IssuerListProps> {
    constructor(props: IssuerListProps);
    protected static defaultProps: {
        showImage: boolean;
        onValid: () => void;
        issuers: any[];
        loadingContext: string;
    };
    formatProps(props: any): any;
    /**
     * Formats the component data output
     */
    formatData(): IssuerListData;
    /**
     * Returns whether the component state is valid or not
     */
    get isValid(): boolean;
    render(): h.JSX.Element;
}
export default IssuerListContainer;
