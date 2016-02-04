/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * A request object which can be used to analyze a text input using an analyzer.
     */
    export interface AnalysisRequest {
        /**
         * The text to be analyzed by the analyzer.
         */
        text: string;
        /**
         * The name of the analyzer.
         */
        analyzerName: string;
    }
}
