/// <reference path="api.d.ts" />
/* tslint:disable:no-unused-variable member-ordering */
module API.Client {
    'use strict';
    export class AnalyzerApi {
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
         * Returns all analysers
         * 
         */
        public getAllAnalyzer (extraHttpRequestParams?: any ) : ng.IHttpPromise<AnalyzersResponse> {
            const path = this.basePath + '/analyzers';
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
         * Version of the getAllAnalyzer method, but using the provided error handler.
         */
        public getAllAnalyzerHandled (extraHttpRequestParams?: any ) : ng.IPromise<AnalyzersResponse> {
            return this.getAllAnalyzer(extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Returns an analyzer by ID
         * 
         * @param id Analyzer name
         */
        public getAnalyzer (id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<AnalyzerResponse> {
            const path = this.basePath + '/analyzers/{id}'
                .replace('{' + 'id' + '}', String(id));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling getAnalyzer');
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
         * Version of the getAnalyzer method, but using the provided error handler.
         * @param id Analyzer name
         */
        public getAnalyzerHandled (id: string, extraHttpRequestParams?: any ) : ng.IPromise<AnalyzerResponse> {
            return this.getAnalyzer(id, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Create or update an analyser
         * 
         * @param analyzer 
         * @param id Analyzer name
         */
        public createOrUpdateAnalyzer (analyzer: Analyzer, id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const path = this.basePath + '/analyzers/{id}'
                .replace('{' + 'id' + '}', String(id));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'analyzer' is set
            if (!analyzer) {
                throw new Error('Missing required parameter analyzer when calling createOrUpdateAnalyzer');
            }
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling createOrUpdateAnalyzer');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: path,
                json: true,
                data: analyzer,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        }
        /**
         * Version of the createOrUpdateAnalyzer method, but using the provided error handler.
         * @param analyzer 
         * @param id Analyzer name
         */
        public createOrUpdateAnalyzerHandled (analyzer: Analyzer, id: string, extraHttpRequestParams?: any ) : ng.IPromise<{}> {
            return this.createOrUpdateAnalyzer(analyzer, id, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Deletes an analyser by ID
         * 
         * @param id Analyzer name
         */
        public deleteAnalyzer (id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const path = this.basePath + '/analyzers/{id}'
                .replace('{' + 'id' + '}', String(id));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling deleteAnalyzer');
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
         * Version of the deleteAnalyzer method, but using the provided error handler.
         * @param id Analyzer name
         */
        public deleteAnalyzerHandled (id: string, extraHttpRequestParams?: any ) : ng.IPromise<{}> {
            return this.deleteAnalyzer(id, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Analyze input next
         * This endpoint is useful to understand the effect of a particular analyser on\nthe input text. You can use the service with both custom and built-in analysers.\nThe returned response contains the tokenised input.
         * @param analysisRequest Text to analyze
         * @param id Analyzer name
         */
        public analyzeText (analysisRequest: AnalysisRequest, id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<AnalyzeTextResponse> {
            const path = this.basePath + '/analyzers/{id}/analyze'
                .replace('{' + 'id' + '}', String(id));
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'analysisRequest' is set
            if (!analysisRequest) {
                throw new Error('Missing required parameter analysisRequest when calling analyzeText');
            }
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling analyzeText');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: path,
                json: true,
                data: analysisRequest,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        }
        /**
         * Version of the analyzeText method, but using the provided error handler.
         * @param analysisRequest Text to analyze
         * @param id Analyzer name
         */
        public analyzeTextHandled (analysisRequest: AnalysisRequest, id: string, extraHttpRequestParams?: any ) : ng.IPromise<AnalyzeTextResponse> {
            return this.analyzeText(analysisRequest, id, extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
    }
}
