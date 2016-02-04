/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * Represents a request which can be sent to Sql connector to index SQL data
     */
    export interface SqlIndexingRequest {
        /**
         * Name of the index
         */
        indexName: string;
        /**
         * The query to be used to fetch data from Sql server
         */
        query: string;
        /**
         * Connection string used to connect to the server
         */
        connectionString: string;
        /**
         * Signifies if all updates to the index are create
         */
        forceCreate?: boolean;
        /**
         * Signifies if the connector should create a job for the task and return a jobId which can be used\nto check the status of the job.
         */
        createJob?: boolean;
    }
}
