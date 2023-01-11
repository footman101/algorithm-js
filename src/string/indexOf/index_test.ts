import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import indexOfBF from "./BF/index.ts";

const s1 = "abc";
const t1 = "asaasdf";

const s2 =
  "aaaaaajwnvekwrklgjwerkljglkenrkvlenmklrmlkfwemklwmerklfmweklrmfklewmrklfmwelkrmflkmwelkrfmlkwermfklwemrklfmwelkrmfklemrlkfmjrngkjnwerjkgnjekrngjkwrentkjgaaaaaaaaabcdeaaaaaaaaaa";
const t2 = "abc";

Deno.test("indexOf - BF", function addTest() {
  assertEquals(indexOfBF(s1, t1), s1.indexOf(t1));
  assertEquals(indexOfBF(s2, t2), s2.indexOf(t2));
});
