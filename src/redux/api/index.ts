import Google from './authentication/Google'
import StubGoogle from './authentication/StubGoogle'
import { AuthenticationApi } from './authentication/type'
import GoogleDrive from './storage/GoogleDrive'
import StubGoogleDrive from './storage/StubGoogleDrive'
import { StorageApi } from './storage/type'

export default class Api {
    public static build(stub: boolean = false): Api {
        let Authentication = null
        let Storage = null

        if (stub) {
            Authentication = StubGoogle
            Storage = StubGoogleDrive
        } else {
            Authentication = Google
            Storage = GoogleDrive
        }

        return new Api(new Authentication(), new Storage())
    }

    public readonly authentication: AuthenticationApi
    public readonly storage: StorageApi

    constructor(authentication: AuthenticationApi, storage: StorageApi) {
        this.authentication = authentication
        this.storage = storage
    }
}
