/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * 
     */
    export interface SearchResults {
        documents?: Array<Document>;
        recordsReturned?: number;
        bestScore?: number;
        /**
         * 
         */
        totalAvailable?: number;
    }
}
