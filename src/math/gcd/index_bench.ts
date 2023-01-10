import gcd from "./index.ts";

Deno.bench(function gcdSmall() {
  gcd(1, 2);
});

Deno.bench(function gcdBig() {
  gcd(3 ** 32, 2 ** 32);
});
