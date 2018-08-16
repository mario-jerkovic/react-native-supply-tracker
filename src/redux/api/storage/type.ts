import { Product } from 'src/redux/modules/supply/types'

export abstract class StorageApi {

    public abstract set accessToken(value: string)

    public abstract getData(): Promise<Product[] | null>

    public abstract setData(data: Product[]): Promise<void>
}
