/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * Represents a request to update a field in an index
     */
    export interface FieldsUpdateRequest {
        /**
         * The list of fields containing the new properties
         */
        fields: Array<Field>;
    }
}
