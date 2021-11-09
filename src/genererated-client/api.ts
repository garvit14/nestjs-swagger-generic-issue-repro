/* tslint:disable */
/* eslint-disable */
/**
 * Cats example
 * The cats API description
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Cat
 */
export interface Cat {
    /**
     * The age of the Cat
     * @type {number}
     * @memberof Cat
     */
    'age': number;
    /**
     * The breed of the Cat
     * @type {string}
     * @memberof Cat
     */
    'breed': string;
    /**
     * The name of the Cat
     * @type {string}
     * @memberof Cat
     */
    'name': string;
}
/**
 * 
 * @export
 * @interface CreateCatDto
 */
export interface CreateCatDto {
    /**
     * 
     * @type {string}
     * @memberof CreateCatDto
     */
    'name': string;
    /**
     * 
     * @type {number}
     * @memberof CreateCatDto
     */
    'age': number;
    /**
     * 
     * @type {string}
     * @memberof CreateCatDto
     */
    'breed': string;
}
/**
 * 
 * @export
 * @interface PaginatedDto
 */
export interface PaginatedDto {
    /**
     * 
     * @type {number}
     * @memberof PaginatedDto
     */
    'total': number;
    /**
     * 
     * @type {number}
     * @memberof PaginatedDto
     */
    'limit': number;
    /**
     * 
     * @type {number}
     * @memberof PaginatedDto
     */
    'offset': number;
    /**
     * 
     * @type {Array<string>}
     * @memberof PaginatedDto
     */
    'results': Array<string>;
}

/**
 * CatsApi - axios parameter creator
 * @export
 */
export const CatsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create cat
         * @param {CreateCatDto} createCatDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        catsControllerCreate: async (createCatDto: CreateCatDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createCatDto' is not null or undefined
            assertParamExists('catsControllerCreate', 'createCatDto', createCatDto)
            const localVarPath = `/cats`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createCatDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        catsControllerFindAll: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/cats`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        catsControllerFindOne: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('catsControllerFindOne', 'id', id)
            const localVarPath = `/cats/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CatsApi - functional programming interface
 * @export
 */
export const CatsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CatsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create cat
         * @param {CreateCatDto} createCatDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async catsControllerCreate(createCatDto: CreateCatDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Cat>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.catsControllerCreate(createCatDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async catsControllerFindAll(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaginatedDto & object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.catsControllerFindAll(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async catsControllerFindOne(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Cat>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.catsControllerFindOne(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CatsApi - factory interface
 * @export
 */
export const CatsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CatsApiFp(configuration)
    return {
        /**
         * 
         * @summary Create cat
         * @param {CreateCatDto} createCatDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        catsControllerCreate(createCatDto: CreateCatDto, options?: any): AxiosPromise<Cat> {
            return localVarFp.catsControllerCreate(createCatDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        catsControllerFindAll(options?: any): AxiosPromise<PaginatedDto & object> {
            return localVarFp.catsControllerFindAll(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        catsControllerFindOne(id: string, options?: any): AxiosPromise<Cat> {
            return localVarFp.catsControllerFindOne(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CatsApi - object-oriented interface
 * @export
 * @class CatsApi
 * @extends {BaseAPI}
 */
export class CatsApi extends BaseAPI {
    /**
     * 
     * @summary Create cat
     * @param {CreateCatDto} createCatDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatsApi
     */
    public catsControllerCreate(createCatDto: CreateCatDto, options?: AxiosRequestConfig) {
        return CatsApiFp(this.configuration).catsControllerCreate(createCatDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatsApi
     */
    public catsControllerFindAll(options?: AxiosRequestConfig) {
        return CatsApiFp(this.configuration).catsControllerFindAll(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatsApi
     */
    public catsControllerFindOne(id: string, options?: AxiosRequestConfig) {
        return CatsApiFp(this.configuration).catsControllerFindOne(id, options).then((request) => request(this.axios, this.basePath));
    }
}

