/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    export interface AnalyzersResponse extends FlexResponse {
        data?: Array<Analyzer>;
    }
}
