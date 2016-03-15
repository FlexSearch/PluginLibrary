/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * Represents an operational message returned from the operation. This can be used to represent both success and failure messages.
     */
    export interface OperationMessage {
        /**
         * The list of key value pairs providing information about the operation.
         */
        properties?: { [key: string]: string; };
        /**
         * The actual message returned by the operation.
         */
        message: string;
        /**
         * Operation Code associated with the message.
         */
        operationCode: string;
    }
}
