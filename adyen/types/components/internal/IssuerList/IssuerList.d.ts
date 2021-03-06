import { h } from 'preact';
import './IssuerList.scss';
declare function IssuerList({ items, placeholder, issuer, ...props }: {
    [x: string]: any;
    items: any;
    placeholder: any;
    issuer: any;
}): h.JSX.Element;
declare namespace IssuerList {
    var defaultProps: {
        onChange: () => void;
        placeholder: string;
    };
}
export default IssuerList;
