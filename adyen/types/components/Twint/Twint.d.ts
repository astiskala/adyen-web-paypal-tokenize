import RedirectElement from "../Redirect";
import { h } from "preact";
/**
 * TwintElement
 */
declare class TwintElement extends RedirectElement {
    static type: string;
    static defaultProps: {
        type: string;
        showPayButton: boolean;
    };
    /**
     * Get the element displayable name
     */
    get displayName(): string;
    payButtonLabel(): string;
    /**
     * Overrides RedirectElement default payButton behaviour to use label
     * @param props - props
     */
    payButton: (props: any) => h.JSX.Element;
}
export default TwintElement;
