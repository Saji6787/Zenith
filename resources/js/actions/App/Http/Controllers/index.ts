import Api from './Api'
import Settings from './Settings'
import Auth from './Auth'

const Controllers = {
    Api: Object.assign(Api, Api),
    Settings: Object.assign(Settings, Settings),
    Auth: Object.assign(Auth, Auth),
}

export default Controllers