/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    export interface IndicesResponse extends FlexResponse {
        data?: Array<Index>;
    }
}
