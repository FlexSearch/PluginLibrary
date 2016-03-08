/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    export interface SearchResponse {
        data?: SearchResults;
        error?: OperationMessage;
    }
}
