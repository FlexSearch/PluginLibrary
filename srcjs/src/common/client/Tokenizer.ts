/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * Tokenizer breaks up a stream of text into tokens, where each token is a sub-sequence\r\nof the characters in the text. An analyzer is aware of the field it is configured \r\nfor, but a tokenizer is not.
     */
    export interface Tokenizer {
        /**
         * Name of the tokenizer
         */
        tokenizerName: string;
        /**
         * Key value pair to be used to configure object's properties.
         */
        parameters?: { [key: string]: string; };
    }
}
