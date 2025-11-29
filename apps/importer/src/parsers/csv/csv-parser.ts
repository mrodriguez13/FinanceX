export function parseCsv(content: string) {
  const lines = content.trim().split('\n');
  return lines.slice(1).map((line) => {
    const [date, description, amount, currency] = line.split(',');
    return { date, description, amount: parseFloat(amount), currency, merchant: description };
  });
}
