/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    export interface JobResponse extends FlexResponse {
        data?: Job;
    }
}
