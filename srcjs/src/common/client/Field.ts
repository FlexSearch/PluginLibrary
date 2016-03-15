/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * s\r\nRepresents a group of fields.
     */
    export interface Field {
        /**
         * Enable sorting for the field
         */
        allowSort?: boolean;
        /**
         * Name of the field
         */
        fieldName: string;
        /**
         * Type of the field
         */
        fieldType?: Field.FieldTypeEnum;
        /**
         * Analyzer to be used during indexing
         */
        indexAnalyzer?: string;
        /**
         * Analyzer to be used during searching
         */
        searchAnalyzer?: string;
        /**
         * Similarity defines the components of scoring. Similarity determines how \r\nengine weights terms. FlexSearch interacts with Similarity at both index-time \r\nand query-time.
         */
        similarity?: Field.SimilarityEnum;
    }
    export module Field {
        export enum FieldTypeEnum { 
            Int = <any> 'Int',
            Double = <any> 'Double',
            Float = <any> 'Float',
            ExactText = <any> 'ExactText',
            Text = <any> 'Text',
            Bool = <any> 'Bool',
            Date = <any> 'Date',
            DateTime = <any> 'DateTime',
            Stored = <any> 'Stored',
            Long = <any> 'Long',
        }
        export enum SimilarityEnum { 
            BM25 = <any> 'BM25',
            TFIDF = <any> 'TFIDF',
        }
    }
}
