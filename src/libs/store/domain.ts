import { Order } from "#/order/domain";

export interface Store {
    address: string;
    name: string
    ownerId: string
}
export interface StoreInfo extends Store {
    recharges: Order[]
    orders: Order[]
}