/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    export interface GetStatusResponse extends FlexResponse {
        data?: IndexStatusResponse;
    }
}
