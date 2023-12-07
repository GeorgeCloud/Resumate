
export function validateDate(date: string): boolean {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const res = dateRegex.test(date);
  return res;
};

export function validateNotEmpty(value: string): boolean {
  const res = value.trim() !== '';
  return res;
};
