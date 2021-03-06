export default function extensions(props: any, refs: any, states: any): {
    /**
     * Handle the binLookup response object generated in triggerBinLookup and process it in relation to the CardInput and it's sub-components.
     * e.g. we might need to add/remove additional markup (a selector for brands), and inform SFP of the issuingCountryCode & detected brand(s).
     *
     * @param binLookupResponse -
     * @param isReset -
     */
    processBinLookup: (binLookupResponse: any, isReset: any) => void;
    /**
     * Handler for clicks on the icons added in response to the /binLookup call
     * Inform SFP of the brand changes when these selections are made
     */
    handleDualBrandSelection: (e: Event | string) => void;
};
