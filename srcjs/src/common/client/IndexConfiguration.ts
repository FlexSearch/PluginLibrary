/// <reference path="api.d.ts" />
module API.Client {
    'use strict';
    /**
     * Allows to control various Index related settings.
     */
    export interface IndexConfiguration {
        /**
         * The amount of time in seconds that FlexSearch should wait before committing changes to the disk. This is only used if no commits have happened in the set time period otherwise CommitEveryNFlushes takes care of commits
         */
        commitTimeSeconds?: number;
        /**
         * Determines how often the data be committed to the physical medium. Commits are more expensive then flushes so keep the setting as high as possible. Making this setting too high will result in excessive ram usage.
         */
        commitEveryNFlushes?: number;
        /**
         * Determines whether to commit first before closing an index
         */
        commitOnClose?: boolean;
        /**
         * Determines whether to enable auto commit functionality or not
         */
        autoCommit?: boolean;
        /**
         * A Directory is a flat list of files. Files may be written once, when they are created. Once a file is created it may only be opened for read, or deleted. Random access is permitted both when reading and writing.
         */
        directoryType?: IndexConfiguration.DirectoryTypeEnum;
        /**
         * The default maximum time to wait for a write lock (in milliseconds).
         */
        defaultWriteLockTimeout?: number;
        /**
         * Determines the amount of RAM that may be used for buffering added documents and deletions before they are flushed to the Directory.
         */
        ramBufferSizeMb?: number;
        /**
         * The number of buffered added documents that will trigger a flush if enabled.
         */
        maxBufferedDocs?: number;
        /**
         * The amount of time in milliseconds that FlexSearch should wait before reopening index reader. This helps in keeping writing and real time aspects of the engine separate.
         */
        refreshTimeMilliseconds?: number;
        /**
         * Determines whether to enable auto refresh or not
         */
        autoRefresh?: boolean;
        /**
         * Corresponds to Lucene Index version. There will always be a default codec associated with each index version.
         */
        indexVersion?: IndexConfiguration.IndexVersionEnum;
        /**
         * Signifies if bloom filter should be used for encoding Id field.
         */
        useBloomFilterForId?: boolean;
        /**
         * 
         */
        allowReads?: boolean;
        /**
         * 
         */
        allowWrites?: boolean;
    }
    export module IndexConfiguration {
        export enum DirectoryTypeEnum { 
            FileSystem = <any> 'FileSystem',
            MemoryMapped = <any> 'MemoryMapped',
            Ram = <any> 'Ram',
        }
        export enum IndexVersionEnum { 
            Lucene_4_x_x = <any> 'Lucene_4_x_x',
            Lucene_5_0_0 = <any> 'Lucene_5_0_0',
        }
    }
}
