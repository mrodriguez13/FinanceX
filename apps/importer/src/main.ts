import { normalizeTransaction } from './workflows/normalize';
import { parseCsv } from './parsers/csv/csv-parser';

async function handleMessage(message: Buffer) {
  const payload = JSON.parse(message.toString());
  const { type, content } = payload;
  let transactions = [];
  if (type === 'csv') transactions = parseCsv(content);
  const normalized = transactions.map(normalizeTransaction);
  console.log(JSON.stringify({ event: 'transactions.imported', count: normalized.length }));
}

// Placeholder for broker subscription
process.stdin.on('data', (buf) => handleMessage(buf));
