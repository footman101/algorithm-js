import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import gcd from "./index.ts";

Deno.test("gcd", function addTest() {
  assertEquals(gcd(4, 6), 2);
  assertEquals(gcd(1, 6), 1);
  assertEquals(gcd(100, 100), 100);
});
