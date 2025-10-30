import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\LoginController::store
 * @see app/Http/Controllers/Auth/LoginController.php:18
 * @route '/login'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\LoginController::store
 * @see app/Http/Controllers/Auth/LoginController.php:18
 * @route '/login'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\LoginController::store
 * @see app/Http/Controllers/Auth/LoginController.php:18
 * @route '/login'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Auth\LoginController::store
 * @see app/Http/Controllers/Auth/LoginController.php:18
 * @route '/login'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Auth\LoginController::store
 * @see app/Http/Controllers/Auth/LoginController.php:18
 * @route '/login'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Auth\LoginController::destroy
 * @see app/Http/Controllers/Auth/LoginController.php:36
 * @route '/dashboard/manage/logout'
 */
export const destroy = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: destroy.url(options),
    method: 'post',
})

destroy.definition = {
    methods: ["post"],
    url: '/dashboard/manage/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\LoginController::destroy
 * @see app/Http/Controllers/Auth/LoginController.php:36
 * @route '/dashboard/manage/logout'
 */
destroy.url = (options?: RouteQueryOptions) => {
    return destroy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\LoginController::destroy
 * @see app/Http/Controllers/Auth/LoginController.php:36
 * @route '/dashboard/manage/logout'
 */
destroy.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: destroy.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Auth\LoginController::destroy
 * @see app/Http/Controllers/Auth/LoginController.php:36
 * @route '/dashboard/manage/logout'
 */
    const destroyForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Auth\LoginController::destroy
 * @see app/Http/Controllers/Auth/LoginController.php:36
 * @route '/dashboard/manage/logout'
 */
        destroyForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(options),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\Auth\LoginController::show
 * @see app/Http/Controllers/Auth/LoginController.php:12
 * @route '/login'
 */
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\LoginController::show
 * @see app/Http/Controllers/Auth/LoginController.php:12
 * @route '/login'
 */
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\LoginController::show
 * @see app/Http/Controllers/Auth/LoginController.php:12
 * @route '/login'
 */
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\LoginController::show
 * @see app/Http/Controllers/Auth/LoginController.php:12
 * @route '/login'
 */
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Auth\LoginController::show
 * @see app/Http/Controllers/Auth/LoginController.php:12
 * @route '/login'
 */
    const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Auth\LoginController::show
 * @see app/Http/Controllers/Auth/LoginController.php:12
 * @route '/login'
 */
        showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Auth\LoginController::show
 * @see app/Http/Controllers/Auth/LoginController.php:12
 * @route '/login'
 */
        showForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const LoginController = { store, destroy, show }

export default LoginController