import AbstractCSF from './AbstractCSF';
import { CSFReturnObject, CSFSetupObject } from '../types';
declare class CSF extends AbstractCSF {
    constructor(setupObj: CSFSetupObject);
    private init;
    createReturnObject(): CSFReturnObject;
    /**
     * Retrieves the iframe, stored by field type, & returns it's contentWindow
     */
    private getIframeContentWin;
}
export default CSF;
