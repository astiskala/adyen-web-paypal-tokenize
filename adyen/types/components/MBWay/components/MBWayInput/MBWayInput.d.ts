import { h } from 'preact';
import { MBWayInputProps } from './types';
import './MBWayInput.scss';
declare function MBWayInput(props: MBWayInputProps): h.JSX.Element;
declare namespace MBWayInput {
    var defaultProps: {
        onChange: () => void;
    };
}
export default MBWayInput;
