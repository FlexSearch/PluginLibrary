/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * Holds all of the information regarding an error
     */
    export interface OperationMessage {
        /**
         * The list of key value pairs holding the data of the error
         */
        properties?: { [key: string]: string; };
        /**
         * The Error message
         */
        message: string;
        /**
         * The Error Code
         */
        errorCode: string;
    }
}
