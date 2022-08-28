export default {
    INTERNAL_SERVER_ERROR: 'Internal Server Error',
    SUCCESS: 'success',
    FAIL: 'error',
    WELCOME: 'Welcome to Blossom Hotel Overstay Fees Calculator',
    v1: '/api/v1',
    DB_ERROR: 'A database error occurred',
    MODULE_ERROR: 'A module error occurred',
    NOT_FOUND_API: (resource: string) => `${resource} Not Found`,
    CREATE_SUCCESS: (resource: string) => `${resource} created successfully`,
    FETCH_SUCCESS: (resource: string) => `${resource} fetched successfully`,
    RESOURCE_NOT_FOUND: (resource: string) => `${resource} not found`,
};
