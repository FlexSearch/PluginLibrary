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
         * Search in a index
         * Search across the index for documents. Any parameter passed as part of query string takes precedence over the same parameter in the request body. This operation supports both GET &amp; POST verbs.
         * @param indexName Index name
         * @param searchQuery 
         * @param q Short hand for &#39;QueryString&#39;.
         * @param c Columns to be retrieved. Use * to retrieve all columns.
         * @param count Count parameter. Refer to &#39;Search Query&#39; properties.
         * @param skip Skip parameter. Refer to &#39;Search Query&#39; properties.
         * @param orderby Order by parameter. Refer to &#39;Search Query&#39; properties.
         * @param orderbydirection Order by Direction parameter. Refer to &#39;Search Query&#39; properties.
         */
        public getSearch (indexName: string, searchQuery: SearchQuery, q?: string, c?: number, count?: number, skip?: number, orderby?: string, orderbydirection?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<SearchResponse> {
            const path = this.basePath + '/indices/{indexName}/search'
                .replace('{' + 'indexName' + '}', String(indexName));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'indexName' is set
            if (!indexName) {
                throw new Error('Missing required parameter indexName when calling getSearch');
            }
            // verify required parameter 'searchQuery' is set
            if (!searchQuery) {
                throw new Error('Missing required parameter searchQuery when calling getSearch');
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
         * Version of the getSearch method, but using the provided error handler.
         * @param indexName Index name
         * @param searchQuery 
         * @param q Short hand for &#39;QueryString&#39;.
         * @param c Columns to be retrieved. Use * to retrieve all columns.
         * @param count Count parameter. Refer to &#39;Search Query&#39; properties.
         * @param skip Skip parameter. Refer to &#39;Search Query&#39; properties.
         * @param orderby Order by parameter. Refer to &#39;Search Query&#39; properties.
         * @param orderbydirection Order by Direction parameter. Refer to &#39;Search Query&#39; properties.
         */
        public getSearchHandled (indexName: string, searchQuery: SearchQuery, q?: string, c?: number, count?: number, skip?: number, orderby?: string, orderbydirection?: string, extraHttpRequestParams?: any ) : ng.IPromise<SearchResponse> {
            return this.getSearch(indexName, searchQuery, q, c, count, skip, orderby, orderbydirection, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Search in a index
         * Search across the index for documents. Any parameter passed as part of query string takes precedence over the same parameter in the request body. This operation supports both GET &amp; POST verbs.
         * @param indexName Index name
         * @param searchQuery 
         * @param q Short hand for &#39;QueryString&#39;.
         * @param c Columns to be retrieved. Use * to retrieve all columns.
         * @param count Count parameter. Refer to &#39;Search Query&#39; properties.
         * @param skip Skip parameter. Refer to &#39;Search Query&#39; properties.
         * @param orderby Order by parameter. Refer to &#39;Search Query&#39; properties.
         * @param orderbydirection Order by Direction parameter. Refer to &#39;Search Query&#39; properties.
         */
        public search (indexName: string, searchQuery: SearchQuery, q?: string, c?: number, count?: number, skip?: number, orderby?: string, orderbydirection?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<SearchResponse> {
            const path = this.basePath + '/indices/{indexName}/search'
                .replace('{' + 'indexName' + '}', String(indexName));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'indexName' is set
            if (!indexName) {
                throw new Error('Missing required parameter indexName when calling search');
            }
            // verify required parameter 'searchQuery' is set
            if (!searchQuery) {
                throw new Error('Missing required parameter searchQuery when calling search');
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
         * Version of the search method, but using the provided error handler.
         * @param indexName Index name
         * @param searchQuery 
         * @param q Short hand for &#39;QueryString&#39;.
         * @param c Columns to be retrieved. Use * to retrieve all columns.
         * @param count Count parameter. Refer to &#39;Search Query&#39; properties.
         * @param skip Skip parameter. Refer to &#39;Search Query&#39; properties.
         * @param orderby Order by parameter. Refer to &#39;Search Query&#39; properties.
         * @param orderbydirection Order by Direction parameter. Refer to &#39;Search Query&#39; properties.
         */
        public searchHandled (indexName: string, searchQuery: SearchQuery, q?: string, c?: number, count?: number, skip?: number, orderby?: string, orderbydirection?: string, extraHttpRequestParams?: any ) : ng.IPromise<SearchResponse> {
            return this.search(indexName, searchQuery, q, c, count, skip, orderby, orderbydirection, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
    }
}
