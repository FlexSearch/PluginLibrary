/// <reference path="api.d.ts" />
/* tslint:disable:no-unused-variable member-ordering */
module API.Client {
    'use strict';
    export class ServerApi {
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
         * Redirect requests from base URL
         * An internal endpoint which is used to redirect requests to the root URL to the\nFlexSearch portal.
         */
        public getRoot (extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const path = this.basePath + '/';
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
         * Version of the getRoot method, but using the provided error handler.
         */
        public getRootHandled (extraHttpRequestParams?: any ) : ng.IPromise<{}> {
            return this.getRoot(extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Returns favourite icon
         * An internal end point which is used to return favourite icon when it is\nrequested by a web browser.
         */
        public getFavicon (extraHttpRequestParams?: any ) : ng.IHttpPromise<any> {
            const path = this.basePath + '/favicon.ico';
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
         * Version of the getFavicon method, but using the provided error handler.
         */
        public getFaviconHandled (extraHttpRequestParams?: any ) : ng.IPromise<any> {
            return this.getFavicon(extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Returns memory used by the server
         * 
         */
        public getMemoryDetails (extraHttpRequestParams?: any ) : ng.IHttpPromise<MemoryDetailsResponse> {
            const path = this.basePath + '/memory';
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
         * Version of the getMemoryDetails method, but using the provided error handler.
         */
        public getMemoryDetailsHandled (extraHttpRequestParams?: any ) : ng.IPromise<MemoryDetailsResponse> {
            return this.getMemoryDetails(extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Ping server
         * A simple endpoint which can be used to check the server is running. This is\nuseful for checking the status of the server from a load balancer or fire-wall.
         */
        public ping (extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const path = this.basePath + '/ping';
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
         * Version of the ping method, but using the provided error handler.
         */
        public pingHandled (extraHttpRequestParams?: any ) : ng.IPromise<{}> {
            return this.ping(extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
        /**
         * Setup a demo index
         * This endpoint if useful for setting up a demo index which can be used to explore\nthe capabilities of FlexSearch. This is an in memory index which gets wiped out\non server restart.
         */
        public setupDemo (extraHttpRequestParams?: any ) : ng.IHttpPromise<FlexResponse> {
            const path = this.basePath + '/setupdemo';
            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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
         * Version of the setupDemo method, but using the provided error handler.
         */
        public setupDemoHandled (extraHttpRequestParams?: any ) : ng.IPromise<FlexResponse> {
            return this.setupDemo(extraHttpRequestParams)
                .then(response => response.data, this.handleError);
        }
    }
}
