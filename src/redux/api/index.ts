import GoogleAuthentication from './authentication/GoogleAuthentication'
import { AuthenticationApi } from './authentication/type'

export default class Api {
    public readonly authentication: AuthenticationApi
    public readonly storage: any

    static build(): Api {
        // @TODO: Can inject stub implementation
        return new Api(new GoogleAuthentication())
    }

    constructor(authentication: AuthenticationApi) {
        this.authentication = authentication
    }
}
