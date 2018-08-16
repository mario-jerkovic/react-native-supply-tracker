import { User } from 'src/redux/modules/session/types'

export abstract class AuthenticationApi {
    public abstract async signIn(silently: boolean): Promise<string | null>

    public abstract async signOut(): Promise<void>

    public abstract async getCurrentUser(): Promise<User | null>
}
