/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * Search query is used for searching over a FlexSearch index. This provides a consistent syntax to execute various types of queries. The syntax is similar to the SQL syntax. This was done on purpose to reduce the learning curve.
     */
    export interface SearchQuery {
        /**
         * Unique name of the query. This is only required if you are setting up a predefined query.
         */
        queryName?: string;
        /**
         * Columns to be returned as part of results. \n + *  - return all columns \n + [] - return no columns \n + [columnName] -  return specific column
         */
        columns?: Array<string>;
        /**
         * Count of results to be returned
         */
        count?: number;
        highlights?: HighlightOption;
        /**
         * Name of the index
         */
        indexName: string;
        /**
         * Can be used to order the results by score or specific field
         */
        orderBy?: string;
        /**
         * Can be used to determine the sort order.
         */
        orderByDirection?: SearchQuery.OrderByDirectionEnum;
        /**
         * Can be used to remove results lower than a certain threshold. This works in conjunction with the score of the top record as all the other records are filtered using the score set by the top scoring record.
         */
        cutOff?: number;
        /**
         * Can be used to return records with distinct values for the given field. Works in a manner similar to Sql distinct by clause.
         */
        distinctBy?: string;
        /**
         * Used to enable paging and skip certain pre-fetched results.
         */
        skip?: number;
        /**
         * Query string to be used for searching
         */
        queryString: string;
        /**
         * If true then scores are returned as a part of search result.
         */
        returnScore?: boolean;
        /**
         * Script that is executed before submitting the search to Lucene. It can be used to modify the incoming Variables
         */
        preSearchScript?: string;
        /**
         * Can be used to override the configuration saved in the predefined query with the one which is passed as the Search Query
         */
        overridePredefinedQueryOptions?: boolean;
        /**
         * Returns an empty string for null values saved in the index rather than the null constant
         */
        returnEmptyStringForNull?: boolean;
        /**
         * The mapping between the variable names (the ones prefixed by '@') given in the query string and their actual values
         */
        variables?: { [key: string]: string; };
    }
    export module SearchQuery {
        export enum OrderByDirectionEnum { 
            Ascending = <any> 'Ascending',
            Descending = <any> 'Descending',
        }
    }
}
