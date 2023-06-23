import { useLedgerData } from '@/usequery/useLedger';
import LedgerReceipt from './LedgerReceipt';
import ParentLoading from '../common/ParentLoading';

export const LedgerSection = () => {
  const { ledger, ledgerLoading } = useLedgerData();

  if (ledgerLoading) {
    return <ParentLoading />;
  }

  return <LedgerReceipt ledger={ledger?.chargeList || []} />;
};
