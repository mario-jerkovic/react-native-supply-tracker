import Api from 'src/redux/api'
import { StoreDispatcher, StoreState } from 'src/redux/types'

import * as actions from './actions'

// import { Product } from 'src/redux/modules/inventory/types'
// const a: Product[] = [
//     {
//         id: '1534433334732',
//         name: 'Banana',
//         supplies: [
//             {
//                 id: '8787633453',
//                 amount: 0,
//                 createdTime: new Date().toISOString(),
//             },
//             {
//                 id: '3656704',
//                 amount: 10.55,
//                 createdTime: '2018-08-16T14:51:10.391Z',
//             },
//         ],
//         photo: 'http://velkaton.ba/wp-content/uploads/2017/03/banane.jpg',
//     },
//     {
//         id: '1534433337109',
//         name: 'Rajčica',
//         supplies: [
//             {
//                 id: '873',
//                 amount: 0,
//                 createdTime: new Date().toISOString(),
//             },
//         ],
//         photo: 'https://cdn.agroklub.com/upload/images/plant-specie/thumb/rajcica32-300x300.jpg',
//     },
//     {
//         id: '1534433337380',
//         name: 'Krompir',
//         supplies: [
//             {
//                 id: '4502',
//                 amount: 0,
//                 createdTime: new Date().toISOString(),
//             },
//         ],
//         photo: 'http://alternativa-za-vas.com/images/uploads/krumpir.jpg',
//     },
//     {
//         id: '1534433337570',
//         name: 'Kapula',
//         supplies: [
//             {
//                 id: '439530983',
//                 amount: 0,
//                 createdTime: new Date().toISOString(),
//             },
//         ],
//         photo: 'https://www.teva-shuk.co.il/wp-content/uploads/2017/07/red-onion.jpg',
//     },
//     {
//         id: '1534433337761',
//         name: 'Kruška',
//         supplies: [
//             {
//                 id: '5345654',
//                 amount: 0,
//                 createdTime: new Date().toISOString(),
//             },
//         ],
//         photo: 'http://alternativa-za-vas.com/images/uploads/kruska.jpg',
//     },
// ]

export function loadProducts() {
    return async (dispatch: StoreDispatcher, getState: () => StoreState, api: Api) => {
        dispatch(actions.loadProducts.request())

        try {
            api.storage.accessToken = getState().session.accessToken
            const products = await api.storage.getData()

            if (!products) {
                dispatch(actions.loadProducts.failure(Error('')))
            } else {
                dispatch(actions.loadProducts.success(products))
            }
        } catch (error) {
            dispatch(actions.loadProducts.failure(Error('')))
        }
    }
}
