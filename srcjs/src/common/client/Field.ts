/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * A field is a section of a Document. \r\n\r\nFields can contain different kinds of data. A name field, for example, \r\nis text (character data). A shoe size field might be a floating point number \r\nso that it could contain memberues like 6 and 9.5. Obviously, the definition of \r\nfields is flexible (you could define a shoe size field as a text field rather\r\nthan a floating point number, for example), but if you define your fields correctly, \r\nFlexSearch will be able to interpret them correctly and your users will get better \r\nresults when they perform a query.\r\n\r\nYou can tell FlexSearch about the kind of data a field contains by specifying its \r\nfield type. The field type tells FlexSearch how to interpret the field and how \r\nit can be queried. When you add a document, FlexSearch takes the information in \r\nthe document�s fields and adds that information to an index. When you perform a \r\nquery, FlexSearch can quickly consult the index and return the matching documents.
     */
    export interface Field {
        /**
         * 
         */
        allowSort?: boolean;
        /**
         * Name of the field
         */
        fieldName: string;
        /**
         * 
         */
        fieldType?: Field.FieldTypeEnum;
        /**
         * 
         */
        indexAnalyzer?: string;
        /**
         * 
         */
        scriptName?: string;
        /**
         * 
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
