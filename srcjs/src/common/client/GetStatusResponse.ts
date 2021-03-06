/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    export interface GetStatusResponse {
        data?: IndexStatusResponse;
        error?: OperationMessage;
    }
}
