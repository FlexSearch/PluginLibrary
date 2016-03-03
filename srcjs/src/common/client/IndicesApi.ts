/// <reference path="api.d.ts" />
/* tslint:disable:no-unused-variable member-ordering */
module API.Client {
    'use strict';
    export class IndicesApi {
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
         * Returns all the indexes
         * 
         */
        public getAllIndex (extraHttpRequestParams?: any ) : ng.IHttpPromise<IndicesResponse> {
            const path = this.basePath + '/indices';
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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
         * Version of the getAllIndex method, but using the provided error handler.
         */
        public getAllIndexHandled (extraHttpRequestParams?: any ) : ng.IPromise<IndicesResponse> {
            return this.getAllIndex(extraHttpRequestParams)
                .then(response => response.data, this.handleError);
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
         * Returns an index by the ID
         * This service will return a status of 404 when index is not present on the server.
         * @param id Index name
         */
        public getIndex (id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<IndexResponse> {
            const path = this.basePath + '/indices/{id}'
                .replace('{' + 'id' + '}', String(id));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling getIndex');
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
         * Version of the getIndex method, but using the provided error handler.
         * @param id Index name
         */
        public getIndexHandled (id: string, extraHttpRequestParams?: any ) : ng.IPromise<IndexResponse> {
            return this.getIndex(id, extraHttpRequestParams)
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
         * Update the configuration of an index
         * &lt;div class=\&quot;important\&quot;&gt;\nThe Index Version cannot be modified\n&lt;/div&gt;
         * @param indexConfiguration 
         * @param id Index Name
         */
        public updateIndexConfiguration (indexConfiguration: IndexConfiguration, id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<FlexResponse> {
            const path = this.basePath + '/indices/{id}/configuration'
                .replace('{' + 'id' + '}', String(id));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'indexConfiguration' is set
            if (!indexConfiguration) {
                throw new Error('Missing required parameter indexConfiguration when calling updateIndexConfiguration');
            }
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling updateIndexConfiguration');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: path,
                json: true,
                data: indexConfiguration,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        }
        /**
         * Version of the updateIndexConfiguration method, but using the provided error handler.
         * @param indexConfiguration 
         * @param id Index Name
         */
        public updateIndexConfigurationHandled (indexConfiguration: IndexConfiguration, id: string, extraHttpRequestParams?: any ) : ng.IPromise<FlexResponse> {
            return this.updateIndexConfiguration(indexConfiguration, id, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Check if an index exists
         * This endpoint can be used to check if an index is present in the system. This\nendpoint is a lighter alternative to accessing the index by an ID as the\nresponse is smaller in size.
         * @param id Index name
         */
        public indexExists (id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<IndexExistsResponse> {
            const path = this.basePath + '/indices/{id}/exists'
                .replace('{' + 'id' + '}', String(id));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling indexExists');
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
         * Version of the indexExists method, but using the provided error handler.
         * @param id Index name
         */
        public indexExistsHandled (id: string, extraHttpRequestParams?: any ) : ng.IPromise<IndexExistsResponse> {
            return this.indexExists(id, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Returns the size of an index
         * The return size may be higher than the actual size of the documents present in\nthe index. The return value includes the space occupied by the transaction logs\nand older segment files which are not cleaned up as part of the last comment.
         * @param id Index name
         */
        public getIndexSize (id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<IndexSizeResponse> {
            const path = this.basePath + '/indices/{id}/size'
                .replace('{' + 'id' + '}', String(id));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling getIndexSize');
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
         * Version of the getIndexSize method, but using the provided error handler.
         * @param id Index name
         */
        public getIndexSizeHandled (id: string, extraHttpRequestParams?: any ) : ng.IPromise<IndexSizeResponse> {
            return this.getIndexSize(id, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Update the Index Fields
         * Any analyser which is to be used as part of an index field should be defined\nbefore adding the field to the index.\n\n&lt;div class=\&quot;note\&quot;&gt;\nAlways reindex the data after a field update, otherwise you may get unexpected\nresults.\n&lt;/div&gt;\n\n&lt;div class=\&quot;important\&quot;&gt;\nNew fields added as part of fields update will not have any data available for\nthe older records, in such cases if the indexing is not done the engine will use\ndefault values for the field type. If an existing field is removed then the data\nassociated with that field will not be accessible even though the data will not\nbe removed from the index itself.\n&lt;/div&gt;
         * @param fieldsUpdateRequest 
         * @param indexName Index Name
         */
        public updateIndexFields (fieldsUpdateRequest: FieldsUpdateRequest, indexName: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<FlexResponse> {
            const path = this.basePath + '/indices/{indexName}/fields'
                .replace('{' + 'indexName' + '}', String(indexName));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'fieldsUpdateRequest' is set
            if (!fieldsUpdateRequest) {
                throw new Error('Missing required parameter fieldsUpdateRequest when calling updateIndexFields');
            }
            // verify required parameter 'indexName' is set
            if (!indexName) {
                throw new Error('Missing required parameter indexName when calling updateIndexFields');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: path,
                json: true,
                data: fieldsUpdateRequest,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        }
        /**
         * Version of the updateIndexFields method, but using the provided error handler.
         * @param fieldsUpdateRequest 
         * @param indexName Index Name
         */
        public updateIndexFieldsHandled (fieldsUpdateRequest: FieldsUpdateRequest, indexName: string, extraHttpRequestParams?: any ) : ng.IPromise<FlexResponse> {
            return this.updateIndexFields(fieldsUpdateRequest, indexName, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Adds or updates a predefined query for the given index
         * 
         * @param searchQuery 
         * @param indexName Index Name
         */
        public updateIndexPredefinedQuery (searchQuery: SearchQuery, indexName: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<FlexResponse> {
            const path = this.basePath + '/indices/{indexName}/predefinedQuery'
                .replace('{' + 'indexName' + '}', String(indexName));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'searchQuery' is set
            if (!searchQuery) {
                throw new Error('Missing required parameter searchQuery when calling updateIndexPredefinedQuery');
            }
            // verify required parameter 'indexName' is set
            if (!indexName) {
                throw new Error('Missing required parameter indexName when calling updateIndexPredefinedQuery');
            }
            let httpRequestParams: any = {
                method: 'PUT',
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
         * Version of the updateIndexPredefinedQuery method, but using the provided error handler.
         * @param searchQuery 
         * @param indexName Index Name
         */
        public updateIndexPredefinedQueryHandled (searchQuery: SearchQuery, indexName: string, extraHttpRequestParams?: any ) : ng.IPromise<FlexResponse> {
            return this.updateIndexPredefinedQuery(searchQuery, indexName, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Returns the status of an index
         * This endpoint can be used to determine if an index is online or off-line.
         * @param indexName Index Name
         */
        public getStatus (indexName: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<GetStatusResponse> {
            const path = this.basePath + '/indices/{indexName}/status'
                .replace('{' + 'indexName' + '}', String(indexName));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'indexName' is set
            if (!indexName) {
                throw new Error('Missing required parameter indexName when calling getStatus');
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
         * Version of the getStatus method, but using the provided error handler.
         * @param indexName Index Name
         */
        public getStatusHandled (indexName: string, extraHttpRequestParams?: any ) : ng.IPromise<GetStatusResponse> {
            return this.getStatus(indexName, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Update the status of an index
         * This endpoint can be used to set an index online or off-line.
         * @param indexName Index Name
         * @param status offline / online
         */
        public updateStatus (indexName: string, status: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<FlexResponse> {
            const path = this.basePath + '/indices/{indexName}/status/{status}'
                .replace('{' + 'indexName' + '}', String(indexName))
                .replace('{' + 'status' + '}', String(status));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'indexName' is set
            if (!indexName) {
                throw new Error('Missing required parameter indexName when calling updateStatus');
            }
            // verify required parameter 'status' is set
            if (!status) {
                throw new Error('Missing required parameter status when calling updateStatus');
            }
            let httpRequestParams: any = {
                method: 'PUT',
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
         * Version of the updateStatus method, but using the provided error handler.
         * @param indexName Index Name
         * @param status offline / online
         */
        public updateStatusHandled (indexName: string, status: string, extraHttpRequestParams?: any ) : ng.IPromise<FlexResponse> {
            return this.updateStatus(indexName, status, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
    }
}
