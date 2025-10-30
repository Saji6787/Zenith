import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
import sellerRequestsF24b73 from './sellerRequests'
/**
* @see \App\Http\Controllers\Api\UserRoleController::sellerRequests
 * @see app/Http/Controllers/Api/UserRoleController.php:23
 * @route '/dashboard/manage/admin/seller-requests'
 */
export const sellerRequests = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sellerRequests.url(options),
    method: 'get',
})

sellerRequests.definition = {
    methods: ["get","head"],
    url: '/dashboard/manage/admin/seller-requests',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\UserRoleController::sellerRequests
 * @see app/Http/Controllers/Api/UserRoleController.php:23
 * @route '/dashboard/manage/admin/seller-requests'
 */
sellerRequests.url = (options?: RouteQueryOptions) => {
    return sellerRequests.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UserRoleController::sellerRequests
 * @see app/Http/Controllers/Api/UserRoleController.php:23
 * @route '/dashboard/manage/admin/seller-requests'
 */
sellerRequests.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sellerRequests.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\UserRoleController::sellerRequests
 * @see app/Http/Controllers/Api/UserRoleController.php:23
 * @route '/dashboard/manage/admin/seller-requests'
 */
sellerRequests.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sellerRequests.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\UserRoleController::sellerRequests
 * @see app/Http/Controllers/Api/UserRoleController.php:23
 * @route '/dashboard/manage/admin/seller-requests'
 */
    const sellerRequestsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: sellerRequests.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\UserRoleController::sellerRequests
 * @see app/Http/Controllers/Api/UserRoleController.php:23
 * @route '/dashboard/manage/admin/seller-requests'
 */
        sellerRequestsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sellerRequests.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\UserRoleController::sellerRequests
 * @see app/Http/Controllers/Api/UserRoleController.php:23
 * @route '/dashboard/manage/admin/seller-requests'
 */
        sellerRequestsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sellerRequests.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    sellerRequests.form = sellerRequestsForm
const admin = {
    sellerRequests: Object.assign(sellerRequests, sellerRequestsF24b73),
}

export default admin