/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * Represents a request to execute dedupe against a given index and search profile
     */
    export interface DuplicateDetectionRequest {
        /**
         * The query that filters the records to include in the deduplication
         */
        selectionQuery?: string;
        /**
         * The file path of the CSV to submit for this session
         */
        fileName?: string;
        /**
         * The name of the field used to display the results
         */
        displayName: string;
        /**
         * The number of threads on which to run the deduplication.
         */
        threadCount?: number;
        /**
         * The name of the index on which to run the session
         */
        indexName: string;
        /**
         * The name of the profile used for deduplication.
         */
        profileName: string;
        /**
         * The maxmimum number of records to scan for deduplication
         */
        maxRecordsToScan?: number;
        /**
         * The maxmimum number of duplicates to include in the result
         */
        duplicatesCount?: number;
    }
}
