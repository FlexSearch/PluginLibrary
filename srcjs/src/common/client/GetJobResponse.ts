/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    export interface GetJobResponse {
        data?: Job;
        error?: OperationMessage;
    }
}
