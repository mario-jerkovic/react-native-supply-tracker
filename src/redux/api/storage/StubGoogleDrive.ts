import { Product } from 'src/redux/modules/inventory/types'
import guid from 'src/utils/guid'
import sleep from 'src/utils/sleep'

import { StorageApi } from './type'

let dummyData: Product[] = [
    {
        id: guid(),
        name: 'Banana',
        supplies: [
            {
                id: guid(),
                amount: 0,
                createdTime: new Date().toISOString(),
            },
            {
                id: guid(),
                amount: 10.55,
                createdTime: '2018-08-16T14:51:10.391Z',
            },
        ],
        photo: 'https://www.konzum.hr/klik/images/products/014/01410437_1l.jpg?1452887978',
    },
    {
        id: guid(),
        name: 'Rajčica',
        supplies: [
            {
                id: guid(),
                amount: 0,
                createdTime: new Date().toISOString(),
            },
        ],
        photo: 'https://www.konzum.hr/klik/images/products/014/01405772_1l.jpg?1472113879',
    },
    {
        id: guid(),
        name: 'Krompir',
        supplies: [
            {
                id: guid(),
                amount: 0,
                createdTime: new Date().toISOString(),
            },
        ],
        photo: 'http://www.konzumshop.ba/images/products/014/01400914l.gif',
    },
    {
        id: guid(),
        name: 'Kapula',
        supplies: [
            {
                id: guid(),
                amount: 0,
                createdTime: new Date().toISOString(),
            },
        ],
        photo: 'http://www.konzumshop.ba/images/products/014/01411791l.gif',
    },
    {
        id: guid(),
        name: 'Kruška',
        supplies: [
            {
                id: guid(),
                amount: 0,
                createdTime: new Date().toISOString(),
            },
        ],
        photo: 'https://www.konzum.hr/klik/images/products/014/01411148_1l.jpg?1452887982',
    },
    {
        id: guid(),
        name: 'Naranča',
        supplies: [
            {
                id: guid(),
                amount: 0,
                createdTime: new Date().toISOString(),
            },
        ],
        photo: 'https://www.konzum.hr/klik/images/products/014/01413609_1l.jpg?1452887989',
    },
    {
        id: guid(),
        name: 'Limun',
        supplies: [
            {
                id: guid(),
                amount: 0,
                createdTime: new Date().toISOString(),
            },
        ],
        photo: 'https://www.konzum.hr/klik/images/products/014/01411805_1l.jpg?1472648534',
    },
    {
        id: guid(),
        name: 'Jabuka Idared',
        supplies: [
            {
                id: guid(),
                amount: 0,
                createdTime: new Date().toISOString(),
            },
        ],
        photo: 'https://www.konzum.hr/klik/images/products/014/01411614_1l.jpg?1452887985',
    },
    {
        id: guid(),
        name: 'Jabuka Zlatni delišes',
        supplies: [
            {
                id: guid(),
                amount: 0,
                createdTime: new Date().toISOString(),
            },
        ],
        photo: 'https://www.konzum.hr/klik/images/products/014/01411106_1l.jpg?1452887981',
    },
    {
        id: guid(),
        name: 'Kupus',
        supplies: [
            {
                id: guid(),
                amount: 0,
                createdTime: new Date().toISOString(),
            },
        ],
        photo: 'https://www.konzum.hr/klik/images/products/014/01401365_1l.jpg?1452887950',
    },
    {
        id: guid(),
        name: 'Jagoda',
        supplies: [
            {
                id: guid(),
                amount: 0,
                createdTime: new Date().toISOString(),
            },
        ],
        photo: 'https://www.konzum.hr/klik/images/products/014/01410085_1l.jpg?1452887975',
    },
    {
        id: guid(),
        name: 'Salata kristal',
        supplies: [
            {
                id: guid(),
                amount: 0,
                createdTime: new Date().toISOString(),
            },
        ],
        photo: 'https://www.konzum.hr/klik/images/products/014/01403008_1l.jpg?1452887956',
    },
    {
        id: guid(),
        name: 'Paprika',
        supplies: [
            {
                id: guid(),
                amount: 0,
                createdTime: new Date().toISOString(),
            },
        ],
        photo: 'https://www.konzum.hr/klik/images/products/014/01408960_1l.jpg?1453463051',
    },
    {
        id: guid(),
        name: 'Trešnja',
        supplies: [
            {
                id: guid(),
                amount: 0,
                createdTime: new Date().toISOString(),
            },
        ],
        photo: 'https://www.konzum.hr/klik/images/products/014/01412478_1l.JPG?1527674800',
    },
]

class StubGoogleDrive implements StorageApi {
    public set accessToken(accessToken: string) {
        // stub implementation
    }

    public async getData() {
        await sleep(1000)

        return dummyData
    }

    public async setData(data: Product[]) {
        await sleep(1000)

        dummyData = data
    }
}

export default StubGoogleDrive
