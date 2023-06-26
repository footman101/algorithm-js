import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import numberToString from "./index.ts";

Deno.test("numberToString", function addTest() {
  assertEquals(numberToString(1231), "1231");
  assertEquals(numberToString(-1231), "-1231");
  assertEquals(numberToString(0), "0");
});
