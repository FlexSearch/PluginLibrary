/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    export interface GetAllIndicesResponse {
        data?: Array<Index>;
        error?: OperationMessage;
    }
}
