const dateTime = {
  long: {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  },
  short: {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  },
  ddmmm: {
    day: 'numeric',
    month: 'long'
  },
  numericFull: {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  },
  numeric: {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }
};
const number = {
  amount: {
    style: 'decimal',
    minimumFractionDigits: 0
  },
  number: {
    style: 'decimal',
    minimumFractionDigits: 0
  }
};
const dateTimeFormats = { nb: dateTime, nn: dateTime };
const numberFormats = { nb: number, nn: number };

export { dateTimeFormats, numberFormats };
