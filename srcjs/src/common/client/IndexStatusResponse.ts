/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * Represents the response of an Index status request - tells whether an index is online, offline, opening, etc.
     */
    export interface IndexStatusResponse {
        /**
         * The status of an index
         */
        indexStatus?: IndexStatusResponse.IndexStatusEnum;
    }
    export module IndexStatusResponse {
        export enum IndexStatusEnum { 
            Opening = <any> 'Opening',
            Recovering = <any> 'Recovering',
            Online = <any> 'Online',
            OnlineFollower = <any> 'OnlineFollower',
            Offline = <any> 'Offline',
            Closing = <any> 'Closing',
            Faulted = <any> 'Faulted',
        }
    }
}
