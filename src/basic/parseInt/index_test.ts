import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import parseInt from "./index.ts";

Deno.test("parseInt", function addTest() {
  assertEquals(parseInt("1231"), 1231);
  assertEquals(parseInt("-1231"), -1231);
  assertEquals(parseInt("-1231sffqwef"), -1231);
  assertEquals(parseInt(""), NaN);
});
