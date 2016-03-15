/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * Represents a request to execute dedupe against a given index and predefined query
     */
    export interface DuplicateDetectionRequest {
        /**
         * The query that filters the records to include in the duplicate detection
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
         * The number of threads on which to run the duplicate detection.
         */
        threadCount?: number;
        /**
         * The name of the index on which the operation is to be performed.
         */
        indexName: string;
        /**
         * The name of the query used for duplication detection.
         */
        predefinedQueryName: string;
        /**
         * The maximum number of records to scan for duplication detection
         */
        maxRecordsToScan?: number;
        /**
         * The maximum number of duplicates to include in the result
         */
        duplicatesCount?: number;
    }
}
