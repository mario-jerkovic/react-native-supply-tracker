import { Product } from '../../modules/supply/models'
import { StorageApi } from './type'

type File = {
    id: string,
    name: string,
    createdTime: string,
}

type BodyMeta = {
    name: string,
    mimeType: string,
    parents: string[],
}

export default class GoogleDrive implements StorageApi {
    private static readonly apiUrl: string = 'https://www.googleapis.com/drive/v3'
    private static readonly uploadApiUrl: string = 'https://www.googleapis.com/upload/drive/v3'
    private static readonly fileName: string = 'demo1.json'
    private static readonly boundaryName: string = 'cYauUoj/ccXHN+yZYwIDAQAB'

    private _accessToken: string = null

    set accessToken(value: string) {
        this._accessToken = value
    }

    private configureGET() {
        if (!this._accessToken) {
            throw new Error('No access token provided')
        }

        return {
            method: 'GET',
            headers: new Headers([['Authorization', `Bearer ${this._accessToken}`]]),
        }
    }

    private configurePOST(length: string, isUpdate: boolean) {
        if (!this._accessToken) {
            throw new Error('No access token provided')
        }

        return {
            method: isUpdate ? 'PATCH' : 'POST',
            headers: new Headers([
                ['Authorization', `Bearer ${this._accessToken}`],
                ['Content-Type', `multipart/related; boundary=${GoogleDrive.boundaryName}`],
                ['Content-Length', length],
            ]),
        }
    }

    private configureBody(data: Object, isUpdate: boolean) {
        const metaData: BodyMeta = {
            name: GoogleDrive.fileName,
            mimeType: 'application/json',
            parents: [],
        }

        if (!isUpdate) {
            metaData.parents = ['appDataFolder']
        }

        return `\r\n--${GoogleDrive.boundaryName}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n`
            + `${JSON.stringify(metaData)}\r\n`
            + `--${GoogleDrive.boundaryName}\r\nContent-Type: application/json\r\n\r\n`
            + `${JSON.stringify(data)}\r\n`
            + `--${GoogleDrive.boundaryName}--`
    }

    private async getMetaData() {
        const options = this.configureGET()
        const fParams = encodeURIComponent('files( id, name, createdTime )')
        const qParams = encodeURIComponent(`name = "${GoogleDrive.fileName}" and "appDataFolder" in parents`)

        const file: File = await fetch(`${GoogleDrive.apiUrl}/files?q=${qParams}&spaces=appDataFolder&fields=${fParams}`, options)
            .then(res => res.json())
            .then(res => res.files[0])

        if (!file) {
            return null
        }

        return file.id
    }

    async getData(): Promise<Product[] | null> {
        const options = this.configureGET()
        const fileId = await this.getMetaData()

        if (!fileId) {
            return null
        }

        try {
            return await fetch(`${GoogleDrive.apiUrl}/files/${fileId}?alt=media`, options)
                .then(res => res.json())
        } catch (error) {
            console.log('Error: getData @TODO', error)
            return null
        }
    }

    async setData(data: Product[]): Promise<void> {
        const fileId = await this.getMetaData()
        const isUpdate = !!fileId

        const body = this.configureBody(data, isUpdate)
        const options = this.configurePOST(body.length.toString(), isUpdate)

        try {
            await fetch(`${GoogleDrive.uploadApiUrl}/files${isUpdate ? `/${fileId}` : ''}?uploadType=multipart`, {
                ...options,
                body,
            })
        } catch (error) {
            console.log('Error: setData @TODO', error)
            throw error
        }
    }
}
