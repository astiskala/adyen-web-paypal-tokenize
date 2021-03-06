import { h } from 'preact';
import { UIElementProps } from '../../UIElement';
import './BlikInput.scss';
interface BlikInputProps extends UIElementProps {
    data?: BlikInputDataState;
}
interface BlikInputDataState {
    blikCode: string;
}
declare function BlikInput(props: BlikInputProps): h.JSX.Element;
declare namespace BlikInput {
    var defaultProps: {
        data: {
            blikCode: string;
        };
    };
}
export default BlikInput;
