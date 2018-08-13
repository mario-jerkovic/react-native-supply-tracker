import { User } from '../../modules/session/models'

export abstract class AuthenticationApi {
    public abstract async signIn(silently: boolean): Promise<string | null>

    public abstract async signOut(): Promise<void>

    public abstract async getCurrentUser(): Promise<User | null>
}
