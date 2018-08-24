import { AuthenticationApi } from 'src/redux/api/authentication/type'
import sleep from 'src/utils/sleep'

class StubGoogle implements AuthenticationApi {
    public async signIn() {
        await sleep(3000)

        return '123abc'
    }

    public async signOut() {
        await sleep(1000)

        // stub implementation
    }

    public async getCurrentUser() {
        await sleep(1000)

        return {
            id: '123456',
            email: 'dummy@gmail.com',
            firstName: 'Dummy',
            lastName: 'Dummy',
            photo: 'https://bootdey.com/img/Content/avatar/avatar7.png',
        }
    }
}

export default StubGoogle
