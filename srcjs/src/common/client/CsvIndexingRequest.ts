/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * Represents a request which can be sent to CSV connector to index CSV data.
     */
    export interface CsvIndexingRequest {
        /**
         * The name of the index on which the operation is to be performed.
         */
        indexName: string;
        /**
         * Indicates if the passed CSV file(s) has a header record
         */
        hasHeaderRecord: boolean;
        /**
         * The headers to be used by each column. This should only be passed when there is\nno header in the csv file. The first column is always assumed to be id field. Make sure\nin your array you always offset the column names by 1 position.
         */
        headers?: Array<string>;
        /**
         * The path of the folder or file to be indexed. The service will pick up all files with .csv extension.
         */
        path: string;
    }
}
