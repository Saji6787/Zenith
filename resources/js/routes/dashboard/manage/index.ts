import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
import produk from './produk'
import user from './user'
/**
* @see \App\Http\Controllers\Auth\LoginController::logout
 * @see app/Http/Controllers/Auth/LoginController.php:36
 * @route '/dashboard/manage/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/dashboard/manage/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\LoginController::logout
 * @see app/Http/Controllers/Auth/LoginController.php:36
 * @route '/dashboard/manage/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\LoginController::logout
 * @see app/Http/Controllers/Auth/LoginController.php:36
 * @route '/dashboard/manage/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Auth\LoginController::logout
 * @see app/Http/Controllers/Auth/LoginController.php:36
 * @route '/dashboard/manage/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: logout.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Auth\LoginController::logout
 * @see app/Http/Controllers/Auth/LoginController.php:36
 * @route '/dashboard/manage/logout'
 */
        logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: logout.url(options),
            method: 'post',
        })
    
    logout.form = logoutForm
const manage = {
    produk: Object.assign(produk, produk),
user: Object.assign(user, user),
logout: Object.assign(logout, logout),
}

export default manage