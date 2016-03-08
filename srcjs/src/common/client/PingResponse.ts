/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    export interface PingResponse {
        data?: OperationMessage;
        error?: OperationMessage;
    }
}
