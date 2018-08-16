import { Product } from 'src/redux/modules/inventory/types'

export abstract class StorageApi {

    public abstract set accessToken(value: string)

    public abstract getData(): Promise<Product[]>

    public abstract setData(data: Product[]): Promise<void>
}
