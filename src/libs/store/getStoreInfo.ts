import { Order } from "#/order/domain";
import { searchData } from "%/storage";
import { StoreInfo } from "./domain";
import { getStore } from "./getStore";

export const getStoreInfo = async (storeId: string) => {
    const res = (await getStore(storeId));
    if (res) {
        const [orders, recharges] = await Promise.all([searchData<Order>('recharges', 'storeId', storeId),
        searchData<Order>('orders', 'storeId', storeId)
        ])
        return {
            ...res,
            orders, recharges
        } as StoreInfo;
    }

    return null
}