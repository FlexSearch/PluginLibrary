/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    export interface AnalyzeTextResponse extends FlexResponse {
        data?: Array<string>;
    }
}
