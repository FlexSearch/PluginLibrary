/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * An analyzer examines the text of fields and generates a token stream.
     */
    export interface Analyzer {
        /**
         * Name of the analyzer
         */
        analyzerName: string;
        tokenizer: Tokenizer;
        /**
         * 
         */
        filters?: Array<Filter>;
    }
}
