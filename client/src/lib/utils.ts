
export function validateDate(date: string): boolean {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  return dateRegex.test(date);
};

export function validateNotEmpty(value: string): boolean {
  return value.trim() !== '';
};
