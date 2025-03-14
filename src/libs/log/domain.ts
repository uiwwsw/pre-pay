export interface Log {
  amount: number;
  uid: string;

  // managerId?: string;
  // managerName?: string;
  storeName: string;
  storeId: string;
  walletName: string;
  walletId: string;

  confirm: boolean;
  recharge?: true;
}
