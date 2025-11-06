import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::store
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:31
 * @route '/api/register'
 */
const store081b1c69c5c56495bfbc4baf15cc7ab2 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store081b1c69c5c56495bfbc4baf15cc7ab2.url(options),
    method: 'post',
})

store081b1c69c5c56495bfbc4baf15cc7ab2.definition = {
    methods: ["post"],
    url: '/api/register',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::store
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:31
 * @route '/api/register'
 */
store081b1c69c5c56495bfbc4baf15cc7ab2.url = (options?: RouteQueryOptions) => {
    return store081b1c69c5c56495bfbc4baf15cc7ab2.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::store
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:31
 * @route '/api/register'
 */
store081b1c69c5c56495bfbc4baf15cc7ab2.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store081b1c69c5c56495bfbc4baf15cc7ab2.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Auth\RegisteredUserController::store
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:31
 * @route '/api/register'
 */
    const store081b1c69c5c56495bfbc4baf15cc7ab2Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store081b1c69c5c56495bfbc4baf15cc7ab2.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Auth\RegisteredUserController::store
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:31
 * @route '/api/register'
 */
        store081b1c69c5c56495bfbc4baf15cc7ab2Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store081b1c69c5c56495bfbc4baf15cc7ab2.url(options),
            method: 'post',
        })
    
    store081b1c69c5c56495bfbc4baf15cc7ab2.form = store081b1c69c5c56495bfbc4baf15cc7ab2Form
    /**
* @see \App\Http\Controllers\Auth\RegisteredUserController::store
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:31
 * @route '/register'
 */
const storee9819db9819a1d19b38dd89a0c4218c4 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storee9819db9819a1d19b38dd89a0c4218c4.url(options),
    method: 'post',
})

storee9819db9819a1d19b38dd89a0c4218c4.definition = {
    methods: ["post"],
    url: '/register',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::store
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:31
 * @route '/register'
 */
storee9819db9819a1d19b38dd89a0c4218c4.url = (options?: RouteQueryOptions) => {
    return storee9819db9819a1d19b38dd89a0c4218c4.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::store
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:31
 * @route '/register'
 */
storee9819db9819a1d19b38dd89a0c4218c4.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storee9819db9819a1d19b38dd89a0c4218c4.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Auth\RegisteredUserController::store
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:31
 * @route '/register'
 */
    const storee9819db9819a1d19b38dd89a0c4218c4Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: storee9819db9819a1d19b38dd89a0c4218c4.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Auth\RegisteredUserController::store
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:31
 * @route '/register'
 */
        storee9819db9819a1d19b38dd89a0c4218c4Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: storee9819db9819a1d19b38dd89a0c4218c4.url(options),
            method: 'post',
        })
    
    storee9819db9819a1d19b38dd89a0c4218c4.form = storee9819db9819a1d19b38dd89a0c4218c4Form

export const store = {
    '/api/register': store081b1c69c5c56495bfbc4baf15cc7ab2,
    '/register': storee9819db9819a1d19b38dd89a0c4218c4,
}

const RegisteredUserController = { store }

export default RegisteredUserController