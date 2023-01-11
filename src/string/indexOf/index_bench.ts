import indexOfBF from "./BF/index.ts";

const s =
  "aaaaaajwnvekwrklgjwerkljglkenrkvlenmklrmlkfwemklwmerklfmweklrmfklewmrklfmwelkrmflkmwelkrfmlkwermfklwemrklfmwelkrmfklemrlkfmjrngkjnwerjkgnjekrngjkwrentkjgaaaaaaaaabcdeaaaaaaaaaa";
const t = "abc";

Deno.bench(function indexOf_Origin() {
  s.indexOf(t);
});

Deno.bench(function indexOf_BF() {
  indexOfBF(s, t);
});
