import Google from './authentication/Google'
import { AuthenticationApi } from './authentication/type'
import GoogleDrive from './storage/GoogleDrive'
import { StorageApi } from './storage/type'

export default class Api {

    public static build(): Api {
        // @TODO: Can inject stub implementation
        return new Api(new Google(), new GoogleDrive())
    }

    public readonly authentication: AuthenticationApi
    public readonly storage: StorageApi

    constructor(authentication: AuthenticationApi, storage: StorageApi) {
        this.authentication = authentication
        this.storage = storage
    }
}
