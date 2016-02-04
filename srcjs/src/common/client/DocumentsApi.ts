/// <reference path="api.d.ts" />
/* tslint:disable:no-unused-variable member-ordering */
module API.Client {
    'use strict';
    export class DocumentsApi {
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
         * Returns top 10 document from the index
         * This endpoint is useful to determine the structure of the documents indexed. At\ntimes it is quicker to get the count of all the documents present in the index\nusing the service rather then using the search API.
         * @param id Index name
         */
        public getDocuments (id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<SearchResultsResponse> {
            const path = this.basePath + '/indices/{id}/documents'
                .replace('{' + 'id' + '}', String(id));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling getDocuments');
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
         * Version of the getDocuments method, but using the provided error handler.
         * @param id Index name
         */
        public getDocumentsHandled (id: string, extraHttpRequestParams?: any ) : ng.IPromise<SearchResultsResponse> {
            return this.getDocuments(id, extraHttpRequestParams)
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
         * Delete a document by ID
         * In case of non-unique ID field, this will delete all the documents associated\nwith that ID.
         * @param indexId Index name
         * @param docId Document ID
         */
        public deleteDocument (indexId: string, docId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const path = this.basePath + '/indices/{indexId}/documents/{docId}'
                .replace('{' + 'indexId' + '}', String(indexId))
                .replace('{' + 'docId' + '}', String(docId));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'indexId' is set
            if (!indexId) {
                throw new Error('Missing required parameter indexId when calling deleteDocument');
            }
            // verify required parameter 'docId' is set
            if (!docId) {
                throw new Error('Missing required parameter docId when calling deleteDocument');
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
         * Version of the deleteDocument method, but using the provided error handler.
         * @param indexId Index name
         * @param docId Document ID
         */
        public deleteDocumentHandled (indexId: string, docId: string, extraHttpRequestParams?: any ) : ng.IPromise<{}> {
            return this.deleteDocument(indexId, docId, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
    }
}
