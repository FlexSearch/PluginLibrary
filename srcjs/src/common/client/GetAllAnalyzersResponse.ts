/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    export interface GetAllAnalyzersResponse {
        data?: Array<Analyzer>;
        error?: OperationMessage;
    }
}
