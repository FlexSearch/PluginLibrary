/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * Used for configuring the settings for text highlighting in the search results
     */
    export interface HighlightOption {
        /**
         * Total number of fragments to return per document
         */
        fragmentsToReturn?: number;
        /**
         * The fields to be used for text highlighting
         */
        highlightedFields: Array<string>;
        /**
         * Post tag to represent the ending of the highlighted word
         */
        postTag?: string;
        /**
         * Pre tag to represent the ending of the highlighted word
         */
        preTag?: string;
    }
}
