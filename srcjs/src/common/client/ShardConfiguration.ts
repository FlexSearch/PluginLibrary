/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * Allows to control various Index Shards related settings.
     */
    export interface ShardConfiguration {
        /**
         * Total number of shards to be present in the given index.
         */
        shardCount?: number;
    }
}
