/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    export interface GetServerMemoryDetailsResponse {
        data?: MemoryDetails;
        error?: OperationMessage;
    }
}
