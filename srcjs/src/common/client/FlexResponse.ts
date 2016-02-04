/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * Base type of an HTTP response containing the Error part
     */
    export interface FlexResponse {
        error?: OperationMessage;
    }
}
