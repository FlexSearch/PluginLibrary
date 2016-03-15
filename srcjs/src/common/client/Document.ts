/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * A document represents the basic unit of information which can be added or \r\nretrieved from the index. A document consists of several fields. A field represents \r\nthe actual data to be indexed. In database analogy an index can be considered as \r\na table while a document is a row of that table. Like a table a FlexSearch document \r\nrequires a fix schema and all fields should have a field type.
     */
    export interface Document {
        /**
         * Represents a group of fields.
         */
        fields?: { [key: string]: string; };
        /**
         * The unique id of the document
         */
        id: string;
        /**
         * The name of the index on which the operation is to be performed.
         */
        indexName: string;
        /**
         * Represents the time at which the document was last indexed.
         */
        timeStamp?: number;
        /**
         * Represents the operation number associated with the operation in the global order \r\nof the operations. This allows causal ordering of the events. A documents with a lower\r\nModifyIndex can be assumed to be modified before another with a higher number. ModifyIndex\r\nis used for optimistic concurrency control.
         */
        modifyIndex?: number;
        /**
         * Returns any highlighted segments of the document. This will only be returned as a part of Search result.
         */
        highlights?: Array<string>;
        /**
         * The score associated with the document. This will only be used when documents are returned from a Search Query.
         */
        score?: number;
    }
}
