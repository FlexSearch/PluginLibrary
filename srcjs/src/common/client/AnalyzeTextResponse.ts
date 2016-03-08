/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    export interface AnalyzeTextResponse {
        data?: Array<string>;
        error?: OperationMessage;
    }
}
