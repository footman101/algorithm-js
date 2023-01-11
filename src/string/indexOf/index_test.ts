import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import indexOfBF from "./BF/index.ts";
import indexOfRK from "./RK/index.ts";

const s1 = "abc";
const t1 = "asaasdf";

const s2 =
  "aaaaaajwnvekwrklgjwerkljglkenrkvlenmklrmlkfwemklwmerklfmweklrmfklewmrklfmwelkrmflkmwelkrfmlkwermfklwemrklfmwelkrmfklemrlkfmjrngkjnwerjkgnjekrngjkwrentkjgaaaaaaaaabcdeaaaaaaaaaa";
const t2 = "abc";
const t22 = "ppppwwf";

Deno.test("indexOf - BF", function addTest() {
  assertEquals(indexOfBF("111", ""), 0);
  assertEquals(indexOfBF("", ""), 0);
  assertEquals(indexOfBF(s1, t1), s1.indexOf(t1));

  assertEquals(indexOfBF(s2, t2), s2.indexOf(t2));
  assertEquals(indexOfBF(s2, t22), s2.indexOf(t22));
});

Deno.test("indexOf - RK", function addTest() {
  assertEquals(indexOfRK("111", ""), 0);
  assertEquals(indexOfRK("", ""), 0);
  assertEquals(indexOfRK(s1, t1), s1.indexOf(t1));

  assertEquals(indexOfRK(s2, t2), s2.indexOf(t2));
  assertEquals(indexOfRK(s2, t22), s2.indexOf(t22));
});
