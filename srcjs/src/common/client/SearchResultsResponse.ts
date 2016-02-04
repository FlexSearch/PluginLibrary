/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    export interface SearchResultsResponse extends FlexResponse {
        data?: SearchResults;
    }
}
