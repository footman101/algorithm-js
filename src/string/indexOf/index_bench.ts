import indexOfBF from "./BF/index.ts";
import indexOfRK from "./RK/index.ts";

const s =
  "abcdacbdabcdacbdabcdacbdabcdacbdabcdacbdacbdabcdacbdbdabcdacbdaaaaaabcdacbdabcdacbdabcdacbdabcdacbdabcdacbdacbdabcdacbdbdabcdacbdaaaaaabcdacbdabcdacbdabcdacbdabcdacbdabcdacbdacbdabcdacbdbdabcdacbdaaaaaabcdacbdabcdacbdabcdacbdabcdacbdabcdacbdacbdabcdacbdbdabcdacbdaaaaaabcdacbdabcdacbdabcdacbdabcdacbdabcdacbdacbdabcdacbdbdabcdacbdaaaaaabcdacbdabcdacbdabcdacbdabcdacbdabcdacbdacbdabcdacbdbdabcdacbdaaaaafffff";
const t =
  "dbdabcdacbdaaaaaabcdacbdabcdacbdabcdacbdabcdacbdabcdacbdacbdabcdacbdbdabcdacbdaaaaaabcdacbdabcdacbdabcdacbdabcdacbdabcdacbdacbdabcdacbdbdabcdacbdaaaaafffff";

console.log(s.indexOf(t), indexOfBF(s, t), indexOfRK(s, t));
Deno.bench(function indexOf_Origin() {
  s.indexOf(t);
});

Deno.bench(function indexOf_BF() {
  indexOfBF(s, t);
});

Deno.bench(function indexOf_RK() {
  indexOfRK(s, t);
});
