import { OpenInvoiceActiveFieldsets, OpenInvoiceStateData, OpenInvoiceVisibility } from './types';
export declare const fieldsetsSchema: string[];
export declare const getActiveFieldsData: (activeFieldsets: OpenInvoiceActiveFieldsets, data: OpenInvoiceStateData) => OpenInvoiceStateData;
export declare const getInitialActiveFieldsets: (visibility: OpenInvoiceVisibility, data?: OpenInvoiceStateData) => OpenInvoiceActiveFieldsets;
