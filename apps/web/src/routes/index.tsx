import React from 'react';
import { Dashboard } from '../modules/reports/Dashboard';
import { AccountsList } from '../modules/accounts/AccountsList';
import { TransactionsList } from '../modules/transactions/TransactionsList';

export const Routes = () => (
  <div>
    <Dashboard />
    <AccountsList />
    <TransactionsList />
  </div>
);
