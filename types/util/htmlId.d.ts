/**
 * Replace characters not allowed for HTML id attributes
 */
export declare function escapeForId(text?: unknown): string;
/**
 * Generate a string to be used for HTML id attributes
 *
 * @param prefix - prefix text for the id. Important because without one, eventually there will be 2 elements with the same id on the same page
 * @param max - range for the random number generator. Defaults to 1,000,000, but can be set higher if necessary.
 */
export declare function randomId(prefix?: string, max?: number): string;
