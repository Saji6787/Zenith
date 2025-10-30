import ProductController from './ProductController'
import VariantController from './VariantController'
import UserController from './UserController'
import UserRoleController from './UserRoleController'
const Api = {
    ProductController: Object.assign(ProductController, ProductController),
VariantController: Object.assign(VariantController, VariantController),
UserController: Object.assign(UserController, UserController),
UserRoleController: Object.assign(UserRoleController, UserRoleController),
}

export default Api