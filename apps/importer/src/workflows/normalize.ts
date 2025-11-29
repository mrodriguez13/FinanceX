import crypto from 'crypto';

export function normalizeTransaction(tx: any) {
  const normalized = {
    ...tx,
    amount: Number(tx.amount),
    duplicateHash: crypto
      .createHash('sha256')
      .update(`${tx.merchant || tx.description}-${tx.date}-${tx.amount}`)
      .digest('hex'),
  };
  return normalized;
}
