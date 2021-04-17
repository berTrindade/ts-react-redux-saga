/* eslint-disable no-unused-vars */

/**
 * Action Types
 *
 * Use enum's for better autocompletion of action type names.
 * These will be compiled away leaving only the final value in your compiled code.
 */
export enum RepositoriesTypes {
    LOAD_REQUEST = '@@repositories/LOAD_REQUEST',
    LOAD_SUCCESS = '@@repositories/LOAD_SUCCCES',
    LOAD_FAILURE = '@@repositories/LOAD_FAILURE'
}

/**
 * Data types
 *
 * Response object for GET /users/{username}/repos
 */
export interface Repository {
    id: number;
    name: string;
}

/**
 * State type
 *
 * Declare state types with `readonly` modifier to get compile time immutability.
 */
export interface RepositoriesState {
    readonly data: Repository[];
    readonly loading: boolean;
    readonly error: boolean;
}
