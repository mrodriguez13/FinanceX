const baseCategories = [
  { id: '00000000-0000-0000-0000-000000000001', name: 'Groceries', type: 'expense' },
  { id: '00000000-0000-0000-0000-000000000002', name: 'Salary', type: 'income' },
];
const baseCurrencies = ['USD', 'EUR', 'MXN'];
const demoRates = [
  { pair: 'USD/EUR', rate: 0.92 },
  { pair: 'USD/MXN', rate: 17.1 },
];

function main() {
  console.log('Seeding categories', baseCategories);
  console.log('Seeding currencies', baseCurrencies);
  console.log('Seeding rates', demoRates);
}

main();
