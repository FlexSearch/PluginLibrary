/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * Options\r\nControls how much information is stored in the postings lists.
     */
    export interface Index {
        /**
         * The name of the index on which the operation is to be performed.
         */
        indexName: string;
        /**
         * Represents a group of fields.
         */
        fields?: Array<Field>;
        /**
         * Array of Predefined Queries
         */
        predefinedQueries?: Array<SearchQuery>;
        /**
         * Allows to control various Index Shards related settings.
         */
        shardConfiguration?: ShardConfiguration;
        /**
         * Allows to control various Index related settings.
         */
        indexConfiguration?: IndexConfiguration;
        /**
         * Represents if an Index is active or not?
         */
        active?: boolean;
    }
}
