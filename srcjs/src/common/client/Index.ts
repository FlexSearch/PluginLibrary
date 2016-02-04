/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * 
     */
    export interface Index {
        /**
         * 
         */
        indexName: string;
        /**
         * 
         */
        fields?: Array<Field>;
        /**
         * 
         */
        searchProfiles?: Array<SearchQuery>;
        shardConfiguration?: ShardConfiguration;
        indexConfiguration?: IndexConfiguration;
        /**
         * 
         */
        active?: boolean;
    }
}
