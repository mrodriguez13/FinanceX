import React from 'react';

export const AccountsList: React.FC = () => {
  const demo = [
    { id: '1', name: 'Checking', currency: 'USD', balance: 1200 },
    { id: '2', name: 'Savings', currency: 'USD', balance: 5400 },
  ];
  return (
    <section>
      <h3>Cuentas</h3>
      <ul>
        {demo.map((a) => (
          <li key={a.id}>{a.name}: {a.balance} {a.currency}</li>
        ))}
      </ul>
    </section>
  );
};
