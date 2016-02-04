/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * Container for global enums
     */
    export interface Enums {
        /**
         * Signifies the Shard status
         */
        shardStatus?: Enums.ShardStatusEnum;
    }
    export module Enums {
        export enum ShardStatusEnum { 
            Opening = <any> 'Opening',
            Recovering = <any> 'Recovering',
            Online = <any> 'Online',
            Offline = <any> 'Offline',
            Closing = <any> 'Closing',
            Faulted = <any> 'Faulted',
        }
    }
}
