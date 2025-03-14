export interface Order {
  amount: number;
  uid: string;

  // managerId?: string;
  // managerName?: string;
  storeName: string;
  storeId: string;
  walletName: string;
  walletId: string;

  confirm: boolean;
}
