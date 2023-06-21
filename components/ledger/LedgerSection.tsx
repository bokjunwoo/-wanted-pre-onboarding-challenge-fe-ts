import { useLedgerData } from '@/usequery/useLedger';
import LedgerReceipt from './LedgerReceipt';
import LoadingSpinner from '../common/LoadingSpinner';

export const LedgerSection = () => {
  const { ledger, ledgerLoading } = useLedgerData();

  if (ledgerLoading) {
    return <LoadingSpinner />;
  }

  return <LedgerReceipt ledger={ledger?.chargeList || []} />;
};
