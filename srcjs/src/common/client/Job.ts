/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * Represents a job which can be scheduled or executed on the server
     */
    export interface Job {
        /**
         * The unique ID associated with the Job
         */
        jobId?: string;
        /**
         * The total number of items to be processed as part of the job.
         */
        totalItems?: number;
        /**
         * The total number of items processed so far.
         */
        processedItems?: number;
        /**
         * The total number of items which have failed.
         */
        failedItems?: number;
        /**
         * The current status of the job.
         */
        jobStatus?: Job.JobStatusEnum;
        /**
         * Any operation message associated with the  job.
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
