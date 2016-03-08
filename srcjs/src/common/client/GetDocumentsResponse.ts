/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    export interface GetDocumentsResponse {
        data?: SearchResults;
        error?: OperationMessage;
    }
}
