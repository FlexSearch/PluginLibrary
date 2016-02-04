/// <reference path="api.d.ts" />
/* tslint:disable:no-unused-variable member-ordering */
module API.Client {
    'use strict';
    export class SearchApi {
        public basePath = 'http://localhost:9800';
        private $bs : any;
        private $q : any;
        public handleError : any;
        public defaultHeaders : any = {};
        static $inject: string[] = ['$http', '$httpParamSerializer'];
        constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string, $bs?: any, $q? : any, errorHandler?: (q, bs, e) => any) {
            if (basePath) this.basePath = basePath;
            if ($bs) this.$bs = $bs;
            if ($q) this.$q = $q;
            if ($bs && $q && errorHandler) {
                this.handleError =
                    function(bs, q) {
                        return errorHandler
                            .bind(null, q)
                            .bind(null, bs);
                    } (this.$bs, this.$q);
            }
        }
        private extendObj<T1,T2>(objA: T1, objB: T2) {
            for(let key in objB){
                if(objB.hasOwnProperty(key)){
                    objA[key] = objB[key];
                }
            }
            return <T1&T2>objA;
        }
        /**
         * Test a search profile
         * This endpoint is useful to test such profiles dynamically, you can test search\nprofiles without adding them to the index. This becomes useful when trying out\ndifferent search profiles. It is advisable to not to use this service directly\nbut through the search UI provided as part of the portal.
         * @param searchProfileTestDto 
         * @param id Index Name
         */
        public doSearchProfileTest (searchProfileTestDto: SearchProfileTestDto, id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<SearchResultsResponse> {
            const path = this.basePath + '/indices/{id}/searchprofiletest'
                .replace('{' + 'id' + '}', String(id));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'searchProfileTestDto' is set
            if (!searchProfileTestDto) {
                throw new Error('Missing required parameter searchProfileTestDto when calling doSearchProfileTest');
            }
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling doSearchProfileTest');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: path,
                json: true,
                data: searchProfileTestDto,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        }
        /**
         * Version of the doSearchProfileTest method, but using the provided error handler.
         * @param searchProfileTestDto 
         * @param id Index Name
         */
        public doSearchProfileTestHandled (searchProfileTestDto: SearchProfileTestDto, id: string, extraHttpRequestParams?: any ) : ng.IPromise<SearchResultsResponse> {
            return this.doSearchProfileTest(searchProfileTestDto, id, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Search and index
         * Search across the index for documents using SQL like query syntax.\n\n&lt;div class= \&quot;note\&quot;&gt;\nAny parameter passed as part of query string takes precedence over the same\nparameter in the request body.\n&lt;/div&gt;\n\nRefer to the search DSL section to learn more about FlexSearch&#39;s querying capability.
         * @param indexName Index name
         * @param q Short hand for &#39;QueryString&#39;.
         * @param c Columns to be retrieved. Use * to retrieve all columns.
         * @param count Count parameter. Refer to &#39;Search Query&#39; properties.
         * @param skip Skip parameter. Refer to &#39;Search Query&#39; properties.
         * @param orderby Order by parameter. Refer to &#39;Search Query&#39; properties.
         * @param orderbydirection Order by Direction parameter. Refer to &#39;Search Query&#39; properties.
         */
        public getSearch (indexName: string, q?: string, c?: number, count?: number, skip?: number, orderby?: string, orderbydirection?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<SearchResultsResponse> {
            const path = this.basePath + '/indices/{indexName}/search'
                .replace('{' + 'indexName' + '}', String(indexName));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'indexName' is set
            if (!indexName) {
                throw new Error('Missing required parameter indexName when calling getSearch');
            }
            if (q !== undefined) {
                queryParameters['q'] = q;
            }
            if (c !== undefined) {
                queryParameters['c'] = c;
            }
            if (count !== undefined) {
                queryParameters['count'] = count;
            }
            if (skip !== undefined) {
                queryParameters['skip'] = skip;
            }
            if (orderby !== undefined) {
                queryParameters['orderby'] = orderby;
            }
            if (orderbydirection !== undefined) {
                queryParameters['orderbydirection'] = orderbydirection;
            }
            let httpRequestParams: any = {
                method: 'GET',
                url: path,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        }
        /**
         * Version of the getSearch method, but using the provided error handler.
         * @param indexName Index name
         * @param q Short hand for &#39;QueryString&#39;.
         * @param c Columns to be retrieved. Use * to retrieve all columns.
         * @param count Count parameter. Refer to &#39;Search Query&#39; properties.
         * @param skip Skip parameter. Refer to &#39;Search Query&#39; properties.
         * @param orderby Order by parameter. Refer to &#39;Search Query&#39; properties.
         * @param orderbydirection Order by Direction parameter. Refer to &#39;Search Query&#39; properties.
         */
        public getSearchHandled (indexName: string, q?: string, c?: number, count?: number, skip?: number, orderby?: string, orderbydirection?: string, extraHttpRequestParams?: any ) : ng.IPromise<SearchResultsResponse> {
            return this.getSearch(indexName, q, c, count, skip, orderby, orderbydirection, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Search and index
         * Search across the index for documents using SQL like query syntax.\n\n&lt;div class= \&quot;note\&quot;&gt;\nAny parameter passed as part of query string takes precedence over the same\nparameter in the request body.\n&lt;/div&gt;\n\nRefer to the search DSL section to learn more about FlexSearch&#39;s querying capability.
         * @param searchQuery 
         * @param indexName Index name
         */
        public postSearch (searchQuery: SearchQuery, indexName: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<SearchResultsResponse> {
            const path = this.basePath + '/indices/{indexName}/search'
                .replace('{' + 'indexName' + '}', String(indexName));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'searchQuery' is set
            if (!searchQuery) {
                throw new Error('Missing required parameter searchQuery when calling postSearch');
            }
            // verify required parameter 'indexName' is set
            if (!indexName) {
                throw new Error('Missing required parameter indexName when calling postSearch');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: path,
                json: true,
                data: searchQuery,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        }
        /**
         * Version of the postSearch method, but using the provided error handler.
         * @param searchQuery 
         * @param indexName Index name
         */
        public postSearchHandled (searchQuery: SearchQuery, indexName: string, extraHttpRequestParams?: any ) : ng.IPromise<SearchResultsResponse> {
            return this.postSearch(searchQuery, indexName, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Deletes document by query
         * Deletes all document returned by the search query for the given index. Returns the records identified\nby the search query.
         * @param indexName Index name
         * @param q Short hand for &#39;QueryString&#39;.
         * @param count Count parameter. Refer to &#39;Search Query&#39; properties.
         * @param skip Skip parameter. Refer to &#39;Search Query&#39; properties.
         * @param orderby Order by parameter. Refer to &#39;Search Query&#39; properties.
         * @param orderbydirection Order by Direction parameter. Refer to &#39;Search Query&#39; properties.
         */
        public deleteDocumentsFromSearch (indexName: string, q?: string, count?: number, skip?: number, orderby?: string, orderbydirection?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<SearchResultsResponse> {
            const path = this.basePath + '/indices/{indexName}/search'
                .replace('{' + 'indexName' + '}', String(indexName));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'indexName' is set
            if (!indexName) {
                throw new Error('Missing required parameter indexName when calling deleteDocumentsFromSearch');
            }
            if (q !== undefined) {
                queryParameters['q'] = q;
            }
            if (count !== undefined) {
                queryParameters['count'] = count;
            }
            if (skip !== undefined) {
                queryParameters['skip'] = skip;
            }
            if (orderby !== undefined) {
                queryParameters['orderby'] = orderby;
            }
            if (orderbydirection !== undefined) {
                queryParameters['orderbydirection'] = orderbydirection;
            }
            let httpRequestParams: any = {
                method: 'DELETE',
                url: path,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        }
        /**
         * Version of the deleteDocumentsFromSearch method, but using the provided error handler.
         * @param indexName Index name
         * @param q Short hand for &#39;QueryString&#39;.
         * @param count Count parameter. Refer to &#39;Search Query&#39; properties.
         * @param skip Skip parameter. Refer to &#39;Search Query&#39; properties.
         * @param orderby Order by parameter. Refer to &#39;Search Query&#39; properties.
         * @param orderbydirection Order by Direction parameter. Refer to &#39;Search Query&#39; properties.
         */
        public deleteDocumentsFromSearchHandled (indexName: string, q?: string, count?: number, skip?: number, orderby?: string, orderbydirection?: string, extraHttpRequestParams?: any ) : ng.IPromise<SearchResultsResponse> {
            return this.deleteDocumentsFromSearch(indexName, q, count, skip, orderby, orderbydirection, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
    }
}
