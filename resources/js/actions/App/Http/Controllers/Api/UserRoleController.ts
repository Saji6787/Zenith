import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\UserRoleController::requestSeller
 * @see app/Http/Controllers/Api/UserRoleController.php:13
 * @route '/dashboard/manage/become-seller'
 */
export const requestSeller = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: requestSeller.url(options),
    method: 'post',
})

requestSeller.definition = {
    methods: ["post"],
    url: '/dashboard/manage/become-seller',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\UserRoleController::requestSeller
 * @see app/Http/Controllers/Api/UserRoleController.php:13
 * @route '/dashboard/manage/become-seller'
 */
requestSeller.url = (options?: RouteQueryOptions) => {
    return requestSeller.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UserRoleController::requestSeller
 * @see app/Http/Controllers/Api/UserRoleController.php:13
 * @route '/dashboard/manage/become-seller'
 */
requestSeller.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: requestSeller.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\UserRoleController::requestSeller
 * @see app/Http/Controllers/Api/UserRoleController.php:13
 * @route '/dashboard/manage/become-seller'
 */
    const requestSellerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: requestSeller.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\UserRoleController::requestSeller
 * @see app/Http/Controllers/Api/UserRoleController.php:13
 * @route '/dashboard/manage/become-seller'
 */
        requestSellerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: requestSeller.url(options),
            method: 'post',
        })
    
    requestSeller.form = requestSellerForm
/**
* @see \App\Http\Controllers\Api\UserRoleController::index
 * @see app/Http/Controllers/Api/UserRoleController.php:23
 * @route '/dashboard/manage/admin/seller-requests'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/manage/admin/seller-requests',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\UserRoleController::index
 * @see app/Http/Controllers/Api/UserRoleController.php:23
 * @route '/dashboard/manage/admin/seller-requests'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UserRoleController::index
 * @see app/Http/Controllers/Api/UserRoleController.php:23
 * @route '/dashboard/manage/admin/seller-requests'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\UserRoleController::index
 * @see app/Http/Controllers/Api/UserRoleController.php:23
 * @route '/dashboard/manage/admin/seller-requests'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\UserRoleController::index
 * @see app/Http/Controllers/Api/UserRoleController.php:23
 * @route '/dashboard/manage/admin/seller-requests'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\UserRoleController::index
 * @see app/Http/Controllers/Api/UserRoleController.php:23
 * @route '/dashboard/manage/admin/seller-requests'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\UserRoleController::index
 * @see app/Http/Controllers/Api/UserRoleController.php:23
 * @route '/dashboard/manage/admin/seller-requests'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Api\UserRoleController::approve
 * @see app/Http/Controllers/Api/UserRoleController.php:30
 * @route '/dashboard/manage/admin/seller-requests/{user}/approve'
 */
export const approve = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

approve.definition = {
    methods: ["post"],
    url: '/dashboard/manage/admin/seller-requests/{user}/approve',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\UserRoleController::approve
 * @see app/Http/Controllers/Api/UserRoleController.php:30
 * @route '/dashboard/manage/admin/seller-requests/{user}/approve'
 */
approve.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { user: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    user: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user: typeof args.user === 'object'
                ? args.user.id
                : args.user,
                }

    return approve.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UserRoleController::approve
 * @see app/Http/Controllers/Api/UserRoleController.php:30
 * @route '/dashboard/manage/admin/seller-requests/{user}/approve'
 */
approve.post = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\UserRoleController::approve
 * @see app/Http/Controllers/Api/UserRoleController.php:30
 * @route '/dashboard/manage/admin/seller-requests/{user}/approve'
 */
    const approveForm = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: approve.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\UserRoleController::approve
 * @see app/Http/Controllers/Api/UserRoleController.php:30
 * @route '/dashboard/manage/admin/seller-requests/{user}/approve'
 */
        approveForm.post = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: approve.url(args, options),
            method: 'post',
        })
    
    approve.form = approveForm
const UserRoleController = { requestSeller, index, approve }

export default UserRoleController