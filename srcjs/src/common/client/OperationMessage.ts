/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * Represents an operational message returned from the operation. This can be used to represent both success and failure messages.
     */
    export interface OperationMessage {
        /**
         * The list of key value pairs holding the data of the error
         */
        properties?: { [key: string]: string; };
        /**
         * Operation message
         */
        message: string;
        /**
         * Operation Code
         */
        operationCode: string;
    }
}
