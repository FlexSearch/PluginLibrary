/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * 
     */
    export interface Document {
        /**
         * 
         */
        fields?: { [key: string]: string; };
        /**
         * 
         */
        id: string;
        /**
         * 
         */
        indexName: string;
        /**
         * 
         */
        timeStamp?: number;
        /**
         * 
         */
        highlights?: Array<string>;
        /**
         * 
         */
        score?: number;
    }
}
