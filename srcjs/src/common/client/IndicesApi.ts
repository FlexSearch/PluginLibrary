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
         * Get all indices
         * 
         */
        public getAllIndices (extraHttpRequestParams?: any ) : ng.IHttpPromise<GetAllIndicesResponse> {
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
         * Version of the getAllIndices method, but using the provided error handler.
         */
        public getAllIndicesHandled (extraHttpRequestParams?: any ) : ng.IPromise<GetAllIndicesResponse> {
            return this.getAllIndices(extraHttpRequestParams)
                .then(response => response.data, this.handleError);
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
         * Get an index
         * This service will return a status of 404 when index is not present on the server.
         * @param indexName Index name
         */
        public getIndex (indexName: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<GetIndexResponse> {
            const path = this.basePath + '/indices/{indexName}'
                .replace('{' + 'indexName' + '}', String(indexName));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'indexName' is set
            if (!indexName) {
                throw new Error('Missing required parameter indexName when calling getIndex');
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
         * @param indexName Index name
         */
        public getIndexHandled (indexName: string, extraHttpRequestParams?: any ) : ng.IPromise<GetIndexResponse> {
            return this.getIndex(indexName, extraHttpRequestParams)
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
         * Update the configuration of an index
         * The Index Version cannot be modified.
         * @param indexConfiguration 
         * @param indexName Index Name
         */
        public updateIndexConfiguration (indexConfiguration: IndexConfiguration, indexName: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<UpdateIndexConfigurationResponse> {
            const path = this.basePath + '/indices/{indexName}/configuration'
                .replace('{' + 'indexName' + '}', String(indexName));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'indexConfiguration' is set
            if (!indexConfiguration) {
                throw new Error('Missing required parameter indexConfiguration when calling updateIndexConfiguration');
            }
            // verify required parameter 'indexName' is set
            if (!indexName) {
                throw new Error('Missing required parameter indexName when calling updateIndexConfiguration');
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
         * @param indexName Index Name
         */
        public updateIndexConfigurationHandled (indexConfiguration: IndexConfiguration, indexName: string, extraHttpRequestParams?: any ) : ng.IPromise<UpdateIndexConfigurationResponse> {
            return this.updateIndexConfiguration(indexConfiguration, indexName, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Check if an index exists
         * This endpoint can be used to check if an index is present in the system. This endpoint is a lighter alternative to accessing the index by an ID as the response is smaller in size.
         * @param indexName Index name
         */
        public indexExists (indexName: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<IndexExistsResponse> {
            const path = this.basePath + '/indices/{indexName}/exists'
                .replace('{' + 'indexName' + '}', String(indexName));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'indexName' is set
            if (!indexName) {
                throw new Error('Missing required parameter indexName when calling indexExists');
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
         * @param indexName Index name
         */
        public indexExistsHandled (indexName: string, extraHttpRequestParams?: any ) : ng.IPromise<IndexExistsResponse> {
            return this.indexExists(indexName, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Update the Index Fields
         * Any analyzer which is to be used as part of an index field should be defined before adding the field to the index. Always re-index the data after a field update, otherwise you may get unexpected results. New fields added as part of fields update will not have any data available for the older records, in such cases if the indexing is not done the engine will use default values for the field type. If an existing field is removed then the data associated with that field will not be accessible even though the data will not be removed from the index itself.
         * @param fieldsUpdateRequest 
         * @param indexName Index Name
         */
        public updateIndexFields (fieldsUpdateRequest: FieldsUpdateRequest, indexName: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<UpdateIndexFieldsResponse> {
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
        public updateIndexFieldsHandled (fieldsUpdateRequest: FieldsUpdateRequest, indexName: string, extraHttpRequestParams?: any ) : ng.IPromise<UpdateIndexFieldsResponse> {
            return this.updateIndexFields(fieldsUpdateRequest, indexName, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Adds or updates a predefined query for the given index
         * 
         * @param searchQuery 
         * @param indexName Index Name
         */
        public updateIndexPredefinedQuery (searchQuery: SearchQuery, indexName: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<UpdateIndexPredefinedQueryResponse> {
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
        public updateIndexPredefinedQueryHandled (searchQuery: SearchQuery, indexName: string, extraHttpRequestParams?: any ) : ng.IPromise<UpdateIndexPredefinedQueryResponse> {
            return this.updateIndexPredefinedQuery(searchQuery, indexName, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Returns the size of an index
         * The return size may be higher than the actual size of the documents present in the index. The return value includes the space occupied by the transaction logs and older segment files which are not cleaned up as part of the last comment.
         * @param indexName Index name
         */
        public getIndexSize (indexName: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<GetIndexSizeResponse> {
            const path = this.basePath + '/indices/{indexName}/size'
                .replace('{' + 'indexName' + '}', String(indexName));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'indexName' is set
            if (!indexName) {
                throw new Error('Missing required parameter indexName when calling getIndexSize');
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
         * @param indexName Index name
         */
        public getIndexSizeHandled (indexName: string, extraHttpRequestParams?: any ) : ng.IPromise<GetIndexSizeResponse> {
            return this.getIndexSize(indexName, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Returns the status of an index
         * This endpoint can be used to determine if an index is online or off-line.
         * @param indexName Index Name
         */
        public getIndexStatus (indexName: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<GetStatusResponse> {
            const path = this.basePath + '/indices/{indexName}/status'
                .replace('{' + 'indexName' + '}', String(indexName));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'indexName' is set
            if (!indexName) {
                throw new Error('Missing required parameter indexName when calling getIndexStatus');
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
         * Version of the getIndexStatus method, but using the provided error handler.
         * @param indexName Index Name
         */
        public getIndexStatusHandled (indexName: string, extraHttpRequestParams?: any ) : ng.IPromise<GetStatusResponse> {
            return this.getIndexStatus(indexName, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Update the status of an index
         * This endpoint can be used to set an index online or off-line.
         * @param indexName Index Name
         * @param status offline / online
         */
        public updateIndexStatus (indexName: string, status: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<UpdateIndexStatusResponse> {
            const path = this.basePath + '/indices/{indexName}/status/{status}'
                .replace('{' + 'indexName' + '}', String(indexName))
                .replace('{' + 'status' + '}', String(status));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'indexName' is set
            if (!indexName) {
                throw new Error('Missing required parameter indexName when calling updateIndexStatus');
            }
            // verify required parameter 'status' is set
            if (!status) {
                throw new Error('Missing required parameter status when calling updateIndexStatus');
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
         * Version of the updateIndexStatus method, but using the provided error handler.
         * @param indexName Index Name
         * @param status offline / online
         */
        public updateIndexStatusHandled (indexName: string, status: string, extraHttpRequestParams?: any ) : ng.IPromise<UpdateIndexStatusResponse> {
            return this.updateIndexStatus(indexName, status, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
    }
}
