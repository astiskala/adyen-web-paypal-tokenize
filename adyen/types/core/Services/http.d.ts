interface HttpOptions {
    accept?: string;
    contentType?: string;
    errorMessage?: string;
    headers?: any;
    loadingContext?: string;
    method?: string;
    path: string;
    errorLevel?: 'silent' | 'info' | 'warn' | 'error' | 'fatal';
}
export declare function http(options: HttpOptions, data?: any): Promise<any>;
export declare const httpGet: (options: HttpOptions, data?: any) => Promise<any>;
export declare const httpPost: (options: HttpOptions, data?: any) => Promise<any>;
export {};
