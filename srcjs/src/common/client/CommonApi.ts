/// <reference path="api.d.ts" />
/* tslint:disable:no-unused-variable member-ordering */
module API.Client {
    'use strict';
    export class CommonApi {
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
         * Create a new index
         * 
         * @param index 
         */
        public createIndex (index: Index, extraHttpRequestParams?: any ) : ng.IHttpPromise<CreateIndexResponse> {
            const path = this.basePath + '/indices';
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'index' is set
            if (!index) {
                throw new Error('Missing required parameter index when calling createIndex');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: path,
                json: true,
                data: index,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        }
        /**
         * Version of the createIndex method, but using the provided error handler.
         * @param index 
         */
        public createIndexHandled (index: Index, extraHttpRequestParams?: any ) : ng.IPromise<CreateIndexResponse> {
            return this.createIndex(index, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Returns document by ID
         * 
         * @param indexId Index name
         * @param docId Document ID
         */
        public getDocument (indexId: string, docId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<GetDocumentResponse> {
            const path = this.basePath + '/indices/{indexId}/documents/{docId}'
                .replace('{' + 'indexId' + '}', String(indexId))
                .replace('{' + 'docId' + '}', String(docId));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'indexId' is set
            if (!indexId) {
                throw new Error('Missing required parameter indexId when calling getDocument');
            }
            // verify required parameter 'docId' is set
            if (!docId) {
                throw new Error('Missing required parameter docId when calling getDocument');
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
         * Version of the getDocument method, but using the provided error handler.
         * @param indexId Index name
         * @param docId Document ID
         */
        public getDocumentHandled (indexId: string, docId: string, extraHttpRequestParams?: any ) : ng.IPromise<GetDocumentResponse> {
            return this.getDocument(indexId, docId, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Create or update a document
         * It is advisable to use create document endpoint when you are sure that the document does not exist in an index. This service will always perform an ID based loOK up to determine if a document already exists. In case of non-unique\nID based index, this will replace all the documents with the currently passed document. This endpoint can be used with concurrency control semantics.
         * @param document 
         * @param indexId Index name
         * @param docId Document ID
         */
        public createOrUpdateDocument (document: Document, indexId: string, docId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<CreateOrUpdateDocumentResponse> {
            const path = this.basePath + '/indices/{indexId}/documents/{docId}'
                .replace('{' + 'indexId' + '}', String(indexId))
                .replace('{' + 'docId' + '}', String(docId));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'document' is set
            if (!document) {
                throw new Error('Missing required parameter document when calling createOrUpdateDocument');
            }
            // verify required parameter 'indexId' is set
            if (!indexId) {
                throw new Error('Missing required parameter indexId when calling createOrUpdateDocument');
            }
            // verify required parameter 'docId' is set
            if (!docId) {
                throw new Error('Missing required parameter docId when calling createOrUpdateDocument');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: path,
                json: true,
                data: document,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        }
        /**
         * Version of the createOrUpdateDocument method, but using the provided error handler.
         * @param document 
         * @param indexId Index name
         * @param docId Document ID
         */
        public createOrUpdateDocumentHandled (document: Document, indexId: string, docId: string, extraHttpRequestParams?: any ) : ng.IPromise<CreateOrUpdateDocumentResponse> {
            return this.createOrUpdateDocument(document, indexId, docId, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Deletes an index
         * Index deletion happens in two parts, first the index configuration file is deleted from the configurations folder, then the index is deleted from the data folder. In case any error is encountered the cleanup will be performed on the server restart.
         * @param indexName Index name
         */
        public deleteIndex (indexName: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<DeleteIndexResponse> {
            const path = this.basePath + '/indices/{indexName}'
                .replace('{' + 'indexName' + '}', String(indexName));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'indexName' is set
            if (!indexName) {
                throw new Error('Missing required parameter indexName when calling deleteIndex');
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
         * Version of the deleteIndex method, but using the provided error handler.
         * @param indexName Index name
         */
        public deleteIndexHandled (indexName: string, extraHttpRequestParams?: any ) : ng.IPromise<DeleteIndexResponse> {
            return this.deleteIndex(indexName, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Create a document
         * Creates a new document. Unlike a database system FlexSearch doesn&#39;t impose the requirement of a unique\nID per document. You can add multiple documents by the same ID but this can\nimpose a problem while adding or retrieving them. You can enforce a unique ID\ncheck by using the `timestamp` field. To understand more about ID check and\nconcurrency control, please refer to the article `concurrency control` under\nconcepts section.
         * @param document 
         * @param indexName Index name
         */
        public createDocument (document: Document, indexName: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<CreateDocumentResponse> {
            const path = this.basePath + '/indices/{indexName}/documents'
                .replace('{' + 'indexName' + '}', String(indexName));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'document' is set
            if (!document) {
                throw new Error('Missing required parameter document when calling createDocument');
            }
            // verify required parameter 'indexName' is set
            if (!indexName) {
                throw new Error('Missing required parameter indexName when calling createDocument');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: path,
                json: true,
                data: document,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        }
        /**
         * Version of the createDocument method, but using the provided error handler.
         * @param document 
         * @param indexName Index name
         */
        public createDocumentHandled (document: Document, indexName: string, extraHttpRequestParams?: any ) : ng.IPromise<CreateDocumentResponse> {
            return this.createDocument(document, indexName, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Delete all documents
         * This will remove all the documents present in an index. This is useful when you want to re-index all the documents.
         * @param indexName Index name
         */
        public deleteAllDocuments (indexName: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<DeleteAllDocumentsResponse> {
            const path = this.basePath + '/indices/{indexName}/documents'
                .replace('{' + 'indexName' + '}', String(indexName));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'indexName' is set
            if (!indexName) {
                throw new Error('Missing required parameter indexName when calling deleteAllDocuments');
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
         * Version of the deleteAllDocuments method, but using the provided error handler.
         * @param indexName Index name
         */
        public deleteAllDocumentsHandled (indexName: string, extraHttpRequestParams?: any ) : ng.IPromise<DeleteAllDocumentsResponse> {
            return this.deleteAllDocuments(indexName, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Duplicate Detection Handler
         * 
         * @param duplicateDetectionRequest 
         * @param indexName Index name
         * @param predefinedQueryName Predefined query name
         */
        public duplicateDetection (duplicateDetectionRequest: DuplicateDetectionRequest, indexName: string, predefinedQueryName: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<DuplicateDetectionResponse> {
            const path = this.basePath + '/indices/{indexName}/duplicatedetection/{predefinedQueryName}'
                .replace('{' + 'indexName' + '}', String(indexName))
                .replace('{' + 'predefinedQueryName' + '}', String(predefinedQueryName));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'duplicateDetectionRequest' is set
            if (!duplicateDetectionRequest) {
                throw new Error('Missing required parameter duplicateDetectionRequest when calling duplicateDetection');
            }
            // verify required parameter 'indexName' is set
            if (!indexName) {
                throw new Error('Missing required parameter indexName when calling duplicateDetection');
            }
            // verify required parameter 'predefinedQueryName' is set
            if (!predefinedQueryName) {
                throw new Error('Missing required parameter predefinedQueryName when calling duplicateDetection');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: path,
                json: true,
                data: duplicateDetectionRequest,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        }
        /**
         * Version of the duplicateDetection method, but using the provided error handler.
         * @param duplicateDetectionRequest 
         * @param indexName Index name
         * @param predefinedQueryName Predefined query name
         */
        public duplicateDetectionHandled (duplicateDetectionRequest: DuplicateDetectionRequest, indexName: string, predefinedQueryName: string, extraHttpRequestParams?: any ) : ng.IPromise<DuplicateDetectionResponse> {
            return this.duplicateDetection(duplicateDetectionRequest, indexName, predefinedQueryName, extraHttpRequestParams)
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
