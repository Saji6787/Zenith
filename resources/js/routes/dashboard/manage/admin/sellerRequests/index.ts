import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
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
const sellerRequests = {
    approve: Object.assign(approve, approve),
}

export default sellerRequests