/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * Signifies if an index exists on the server or not?
     */
    export interface IndexExists {
        /**
         * Status signifying if the index exists.
         */
        exists?: boolean;
    }
}
