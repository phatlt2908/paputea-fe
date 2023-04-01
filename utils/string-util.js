export function formatCurrency(value) {
  const formatter = new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return formatter.format(value);
}

export function formatNumber(value) {
  return value.toLocaleString();
}

export function formatDate(value) {
  const date = new Date(value);
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  return new Intl.DateTimeFormat("en-GB", options).format(date);
}
