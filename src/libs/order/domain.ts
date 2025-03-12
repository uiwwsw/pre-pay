export interface Order {
    amount: number
    created: Date
    uid: string;

    managerId: string;
    storeId: string;
    walletId: string;
}