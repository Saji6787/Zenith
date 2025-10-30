import Auth from './Auth'
import Api from './Api'
import Settings from './Settings'
const Controllers = {
    Auth: Object.assign(Auth, Auth),
Api: Object.assign(Api, Api),
Settings: Object.assign(Settings, Settings),
}

export default Controllers