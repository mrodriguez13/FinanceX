import React from 'react';
import { z } from 'zod';

const transactionSchema = z.object({
  id: z.string(),
  description: z.string(),
  amount: z.number(),
  currency: z.string(),
});

type Transaction = z.infer<typeof transactionSchema>;

export const TransactionsList: React.FC = () => {
  const demo: Transaction[] = [
    { id: '1', description: 'Grocery', amount: -120, currency: 'USD' },
    { id: '2', description: 'Salary', amount: 2500, currency: 'USD' },
  ];
  return (
    <section>
      <h3>Transacciones</h3>
      <ul>
        {demo.map((t) => (
          <li key={t.id}>{t.description}: {t.amount} {t.currency}</li>
        ))}
      </ul>
    </section>
  );
};
