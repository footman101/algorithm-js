const gcd: (p: number, q: number) => number = (
  p,
  q,
) => {
  if (q === 0) {
    return p;
  }
  return gcd(q, p % q);
};

export default gcd;
