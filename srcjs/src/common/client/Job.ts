/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * 
     */
    export interface Job {
        /**
         * 
         */
        jobId?: string;
        /**
         * 
         */
        totalItems?: number;
        /**
         * 
         */
        processedItems?: number;
        /**
         * 
         */
        failedItems?: number;
        /**
         * 
         */
        jobStatus?: Job.JobStatusEnum;
        /**
         * 
         */
        message?: string;
    }
    export module Job {
        export enum JobStatusEnum { 
            Initializing = <any> 'Initializing',
            Initialized = <any> 'Initialized',
            InProgress = <any> 'InProgress',
            Completed = <any> 'Completed',
            CompletedWithErrors = <any> 'CompletedWithErrors',
        }
    }
}
