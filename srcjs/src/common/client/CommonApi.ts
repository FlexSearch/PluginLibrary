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
        public createIndex (index: Index, extraHttpRequestParams?: any ) : ng.IHttpPromise<CreationIdResponse> {
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
        public createIndexHandled (index: Index, extraHttpRequestParams?: any ) : ng.IPromise<CreationIdResponse> {
            return this.createIndex(index, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Deletes an index by ID
         * Index deletion happens in two parts, first the index configuration file is\ndeleted from the configurations folder, then the index is deleted from the data\nfolder. In case any error is encountered the cleanup will be performed on the\nserver restart.
         * @param id Index name
         */
        public deleteIndex (id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<FlexResponse> {
            const path = this.basePath + '/indices/{id}'
                .replace('{' + 'id' + '}', String(id));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling deleteIndex');
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
         * @param id Index name
         */
        public deleteIndexHandled (id: string, extraHttpRequestParams?: any ) : ng.IPromise<FlexResponse> {
            return this.deleteIndex(id, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Connector for importing CSV file data into the system.
         * 
         * @param csvIndexingRequest 
         * @param id Index name
         */
        public csv (csvIndexingRequest: CsvIndexingRequest, id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<JobSuccessResponse> {
            const path = this.basePath + '/indices/{id}/csv'
                .replace('{' + 'id' + '}', String(id));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'csvIndexingRequest' is set
            if (!csvIndexingRequest) {
                throw new Error('Missing required parameter csvIndexingRequest when calling csv');
            }
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling csv');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: path,
                json: true,
                data: csvIndexingRequest,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        }
        /**
         * Version of the csv method, but using the provided error handler.
         * @param csvIndexingRequest 
         * @param id Index name
         */
        public csvHandled (csvIndexingRequest: CsvIndexingRequest, id: string, extraHttpRequestParams?: any ) : ng.IPromise<JobSuccessResponse> {
            return this.csv(csvIndexingRequest, id, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Creates a new document
         * Unlike a database system FlexSearch doesn&#39;t impose the requirement of a unique\nID per document. You can add multiple documents by the same ID but this can\nimpose a problem while adding or retrieving them. You can enforce a unique ID\ncheck by using the `timestamp` field. To understand more about ID check and\nconcurrency control, please refer to the article `concurrency control` under\nconcepts section.
         * @param document 
         * @param id Index name
         */
        public createDocument (document: Document, id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<CreationIdResponse> {
            const path = this.basePath + '/indices/{id}/documents'
                .replace('{' + 'id' + '}', String(id));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'document' is set
            if (!document) {
                throw new Error('Missing required parameter document when calling createDocument');
            }
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling createDocument');
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
         * @param id Index name
         */
        public createDocumentHandled (document: Document, id: string, extraHttpRequestParams?: any ) : ng.IPromise<CreationIdResponse> {
            return this.createDocument(document, id, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Deletes all documents present in the index
         * This will remove all the documents present in an index. This is useful when you\nwant to reindex all the documents.
         * @param id Index name
         */
        public deleteDocuments (id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const path = this.basePath + '/indices/{id}/documents'
                .replace('{' + 'id' + '}', String(id));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling deleteDocuments');
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
         * Version of the deleteDocuments method, but using the provided error handler.
         * @param id Index name
         */
        public deleteDocumentsHandled (id: string, extraHttpRequestParams?: any ) : ng.IPromise<{}> {
            return this.deleteDocuments(id, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Connector for importing data from Microsoft SQL into the system.
         * 
         * @param sqlIndexingRequest The SQL request
         * @param id Index Name
         */
        public sql (sqlIndexingRequest: SqlIndexingRequest, id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<JobSuccessResponse> {
            const path = this.basePath + '/indices/{id}/sql'
                .replace('{' + 'id' + '}', String(id));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'sqlIndexingRequest' is set
            if (!sqlIndexingRequest) {
                throw new Error('Missing required parameter sqlIndexingRequest when calling sql');
            }
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling sql');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: path,
                json: true,
                data: sqlIndexingRequest,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        }
        /**
         * Version of the sql method, but using the provided error handler.
         * @param sqlIndexingRequest The SQL request
         * @param id Index Name
         */
        public sqlHandled (sqlIndexingRequest: SqlIndexingRequest, id: string, extraHttpRequestParams?: any ) : ng.IPromise<JobSuccessResponse> {
            return this.sql(sqlIndexingRequest, id, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Returns document by ID
         * 
         * @param indexId Index name
         * @param docId Document ID
         */
        public getDocument (indexId: string, docId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<DocumentResponse> {
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
        public getDocumentHandled (indexId: string, docId: string, extraHttpRequestParams?: any ) : ng.IPromise<DocumentResponse> {
            return this.getDocument(indexId, docId, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Create or update a document
         * It is advisable to use create document endpoint when you are sure that the\ndocument does not exist in an index. This service will always perform an ID\nbased look up to determine if a document already exists. In case of non-unique\nID based index, this will replace all the documents with the currently passed\ndocument. This endpoint can be used with concurrency control semantics.
         * @param document 
         * @param indexId Index name
         * @param docId Document ID
         */
        public updateDocument (document: Document, indexId: string, docId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<FlexResponse> {
            const path = this.basePath + '/indices/{indexId}/documents/{docId}'
                .replace('{' + 'indexId' + '}', String(indexId))
                .replace('{' + 'docId' + '}', String(docId));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'document' is set
            if (!document) {
                throw new Error('Missing required parameter document when calling updateDocument');
            }
            // verify required parameter 'indexId' is set
            if (!indexId) {
                throw new Error('Missing required parameter indexId when calling updateDocument');
            }
            // verify required parameter 'docId' is set
            if (!docId) {
                throw new Error('Missing required parameter docId when calling updateDocument');
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
         * Version of the updateDocument method, but using the provided error handler.
         * @param document 
         * @param indexId Index name
         * @param docId Document ID
         */
        public updateDocumentHandled (document: Document, indexId: string, docId: string, extraHttpRequestParams?: any ) : ng.IPromise<FlexResponse> {
            return this.updateDocument(document, indexId, docId, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Duplicate Detection Handler
         * 
         * @param duplicateDetectionRequest 
         * @param indexName Index name
         * @param profileName Profile name
         */
        public duplicateDetection (duplicateDetectionRequest: DuplicateDetectionRequest, indexName: string, profileName: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<JobSuccessResponse> {
            const path = this.basePath + '/indices/{indexName}/duplicatedetection/{profileName}'
                .replace('{' + 'indexName' + '}', String(indexName))
                .replace('{' + 'profileName' + '}', String(profileName));
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
            // verify required parameter 'profileName' is set
            if (!profileName) {
                throw new Error('Missing required parameter profileName when calling duplicateDetection');
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
         * @param profileName Profile name
         */
        public duplicateDetectionHandled (duplicateDetectionRequest: DuplicateDetectionRequest, indexName: string, profileName: string, extraHttpRequestParams?: any ) : ng.IPromise<JobSuccessResponse> {
            return this.duplicateDetection(duplicateDetectionRequest, indexName, profileName, extraHttpRequestParams)
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
    }
}
