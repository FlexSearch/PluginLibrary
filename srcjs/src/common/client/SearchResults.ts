/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * Represents the output of a Search Query
     */
    export interface SearchResults {
        /**
         * Array of Documents
         */
        documents?: Array<Document>;
        /**
         * Total number of records returned as part of the Search Query
         */
        recordsReturned?: number;
        /**
         * The highest score returned by any document as part of the search result.
         */
        bestScore?: number;
        /**
         * The total number of documents available as part of the search query. Note the actual records returned could be lower than the total available in the index.
         */
        totalAvailable?: number;
    }
}
