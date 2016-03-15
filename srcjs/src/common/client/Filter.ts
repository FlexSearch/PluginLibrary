/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * Filters consume input and produce a stream of tokens. In most cases a filter looks \r\nat each token in the stream sequentially and decides whether to pass it along, \r\nreplace it or discard it. A filter may also do more complex analysis by looking \r\nahead to consider multiple tokens at once, although this is less common.
     */
    export interface Filter {
        /**
         * Name of the filter
         */
        filterName: string;
        /**
         * Key value pair to be used to configure object's properties.
         */
        parameters?: { [key: string]: string; };
    }
}
