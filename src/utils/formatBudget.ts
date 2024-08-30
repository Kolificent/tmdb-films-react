function formatBudget(amount: number): string {
  const billion = 1_000_000_000;
  const million = 1_000_000;
  const thousand = 1_000;

  if (amount >= billion) {
    return `${amount / billion} млрд $`;
  } else if (amount >= million) {
    return `${amount / million} млн $`;
  } else if (amount >= thousand) {
    return `${amount / thousand} тысяч $`;
  } else {
    return `${amount} $`;
  }
}

export default formatBudget;
