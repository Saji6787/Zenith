import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\VariantController::create
 * @see app/Http/Controllers/Api/VariantController.php:12
 * @route '/dashboard/manage/produk/varian/create/{id_produk}'
 */
export const create = (args: { id_produk: string | number } | [id_produk: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/manage/produk/varian/create/{id_produk}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\VariantController::create
 * @see app/Http/Controllers/Api/VariantController.php:12
 * @route '/dashboard/manage/produk/varian/create/{id_produk}'
 */
create.url = (args: { id_produk: string | number } | [id_produk: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id_produk: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id_produk: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id_produk: args.id_produk,
                }

    return create.definition.url
            .replace('{id_produk}', parsedArgs.id_produk.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\VariantController::create
 * @see app/Http/Controllers/Api/VariantController.php:12
 * @route '/dashboard/manage/produk/varian/create/{id_produk}'
 */
create.get = (args: { id_produk: string | number } | [id_produk: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\VariantController::create
 * @see app/Http/Controllers/Api/VariantController.php:12
 * @route '/dashboard/manage/produk/varian/create/{id_produk}'
 */
create.head = (args: { id_produk: string | number } | [id_produk: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\VariantController::create
 * @see app/Http/Controllers/Api/VariantController.php:12
 * @route '/dashboard/manage/produk/varian/create/{id_produk}'
 */
    const createForm = (args: { id_produk: string | number } | [id_produk: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\VariantController::create
 * @see app/Http/Controllers/Api/VariantController.php:12
 * @route '/dashboard/manage/produk/varian/create/{id_produk}'
 */
        createForm.get = (args: { id_produk: string | number } | [id_produk: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\VariantController::create
 * @see app/Http/Controllers/Api/VariantController.php:12
 * @route '/dashboard/manage/produk/varian/create/{id_produk}'
 */
        createForm.head = (args: { id_produk: string | number } | [id_produk: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Api\VariantController::edit
 * @see app/Http/Controllers/Api/VariantController.php:46
 * @route '/dashboard/manage/produk/varian/{id_produk}/edit'
 */
export const edit = (args: { id_produk: string | number } | [id_produk: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/manage/produk/varian/{id_produk}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\VariantController::edit
 * @see app/Http/Controllers/Api/VariantController.php:46
 * @route '/dashboard/manage/produk/varian/{id_produk}/edit'
 */
edit.url = (args: { id_produk: string | number } | [id_produk: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id_produk: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id_produk: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id_produk: args.id_produk,
                }

    return edit.definition.url
            .replace('{id_produk}', parsedArgs.id_produk.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\VariantController::edit
 * @see app/Http/Controllers/Api/VariantController.php:46
 * @route '/dashboard/manage/produk/varian/{id_produk}/edit'
 */
edit.get = (args: { id_produk: string | number } | [id_produk: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\VariantController::edit
 * @see app/Http/Controllers/Api/VariantController.php:46
 * @route '/dashboard/manage/produk/varian/{id_produk}/edit'
 */
edit.head = (args: { id_produk: string | number } | [id_produk: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\VariantController::edit
 * @see app/Http/Controllers/Api/VariantController.php:46
 * @route '/dashboard/manage/produk/varian/{id_produk}/edit'
 */
    const editForm = (args: { id_produk: string | number } | [id_produk: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\VariantController::edit
 * @see app/Http/Controllers/Api/VariantController.php:46
 * @route '/dashboard/manage/produk/varian/{id_produk}/edit'
 */
        editForm.get = (args: { id_produk: string | number } | [id_produk: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\VariantController::edit
 * @see app/Http/Controllers/Api/VariantController.php:46
 * @route '/dashboard/manage/produk/varian/{id_produk}/edit'
 */
        editForm.head = (args: { id_produk: string | number } | [id_produk: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\Api\VariantController::store
 * @see app/Http/Controllers/Api/VariantController.php:22
 * @route '/dashboard/manage/produk/varian'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/manage/produk/varian',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\VariantController::store
 * @see app/Http/Controllers/Api/VariantController.php:22
 * @route '/dashboard/manage/produk/varian'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\VariantController::store
 * @see app/Http/Controllers/Api/VariantController.php:22
 * @route '/dashboard/manage/produk/varian'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\VariantController::store
 * @see app/Http/Controllers/Api/VariantController.php:22
 * @route '/dashboard/manage/produk/varian'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\VariantController::store
 * @see app/Http/Controllers/Api/VariantController.php:22
 * @route '/dashboard/manage/produk/varian'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Api\VariantController::update
 * @see app/Http/Controllers/Api/VariantController.php:58
 * @route '/dashboard/manage/produk/varian/{id_produk}'
 */
export const update = (args: { id_produk: string | number } | [id_produk: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/manage/produk/varian/{id_produk}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Api\VariantController::update
 * @see app/Http/Controllers/Api/VariantController.php:58
 * @route '/dashboard/manage/produk/varian/{id_produk}'
 */
update.url = (args: { id_produk: string | number } | [id_produk: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id_produk: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id_produk: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id_produk: args.id_produk,
                }

    return update.definition.url
            .replace('{id_produk}', parsedArgs.id_produk.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\VariantController::update
 * @see app/Http/Controllers/Api/VariantController.php:58
 * @route '/dashboard/manage/produk/varian/{id_produk}'
 */
update.put = (args: { id_produk: string | number } | [id_produk: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Api\VariantController::update
 * @see app/Http/Controllers/Api/VariantController.php:58
 * @route '/dashboard/manage/produk/varian/{id_produk}'
 */
    const updateForm = (args: { id_produk: string | number } | [id_produk: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\VariantController::update
 * @see app/Http/Controllers/Api/VariantController.php:58
 * @route '/dashboard/manage/produk/varian/{id_produk}'
 */
        updateForm.put = (args: { id_produk: string | number } | [id_produk: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Api\VariantController::destroy
 * @see app/Http/Controllers/Api/VariantController.php:94
 * @route '/dashboard/manage/produk/varian/{id_produk}'
 */
export const destroy = (args: { id_produk: string | number } | [id_produk: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/manage/produk/varian/{id_produk}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\VariantController::destroy
 * @see app/Http/Controllers/Api/VariantController.php:94
 * @route '/dashboard/manage/produk/varian/{id_produk}'
 */
destroy.url = (args: { id_produk: string | number } | [id_produk: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id_produk: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id_produk: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id_produk: args.id_produk,
                }

    return destroy.definition.url
            .replace('{id_produk}', parsedArgs.id_produk.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\VariantController::destroy
 * @see app/Http/Controllers/Api/VariantController.php:94
 * @route '/dashboard/manage/produk/varian/{id_produk}'
 */
destroy.delete = (args: { id_produk: string | number } | [id_produk: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Api\VariantController::destroy
 * @see app/Http/Controllers/Api/VariantController.php:94
 * @route '/dashboard/manage/produk/varian/{id_produk}'
 */
    const destroyForm = (args: { id_produk: string | number } | [id_produk: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\VariantController::destroy
 * @see app/Http/Controllers/Api/VariantController.php:94
 * @route '/dashboard/manage/produk/varian/{id_produk}'
 */
        destroyForm.delete = (args: { id_produk: string | number } | [id_produk: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const varian = {
    create: Object.assign(create, create),
edit: Object.assign(edit, edit),
store: Object.assign(store, store),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default varian