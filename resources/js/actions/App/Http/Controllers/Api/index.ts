import ProductController from './ProductController'
import VariantController from './VariantController'
import UserController from './UserController'
const Api = {
    ProductController: Object.assign(ProductController, ProductController),
VariantController: Object.assign(VariantController, VariantController),
UserController: Object.assign(UserController, UserController),
}

export default Api