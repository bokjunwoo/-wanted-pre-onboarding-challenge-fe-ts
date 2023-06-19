import { userLedgerItem } from '@/pages/api/ledger';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export type LedgerItem = {
  id: string;
  date: string;
  title: string;
  price: number;
};

export type Ledger = {
  nickname: string;
  chargeList: LedgerItem[];
};

export const useLedgerData = (): {
  ledger: Ledger | undefined;
  ledgerLoading: boolean;
} => {
  const { data: ledger, isLoading: ledgerLoading } = useQuery<
    Ledger,
    AxiosError
  >({
    queryKey: ['ledger'],
    queryFn: () => userLedgerItem(),
  });

  return { ledger: ledger, ledgerLoading };
};
